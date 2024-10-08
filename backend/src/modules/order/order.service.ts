import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderCard } from 'src/database/entities/order-card.entity';
import { Order } from 'src/database/entities/order.entity';
import { OrderStatus } from 'src/types/orderStatus.type';
import { DataSource, Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { CardService } from '../card/card.service';
import { CardDTO } from '../card/model/card.dto';
import { CollectionService } from '../collection/collection.service';
import { UserService } from '../user/user.service';
import { ChangeStatus } from './model/changeStatus.model';
import { CreateOrder } from './model/createOrder.model';

@Injectable()
export class OrderService extends BaseService<Order> {
  private readonly logger = new Logger(OrderService.name);
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderCard)
    private readonly orderCardRepository: Repository<OrderCard>,
    private readonly collectionService: CollectionService,
    private readonly userService: UserService,
    private readonly cardService: CardService,
    private readonly dataSource: DataSource,
  ) {
    super(orderRepository);
  }

  async createOrder(createOrder: CreateOrder, userId: number) {
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const order = new Order();
    order.status = createOrder.status;
    order.total = createOrder.total;
    order.user = user;

    const transaction = await this.dataSource.transaction(async (manager) => {
      const newOrder = await manager.save(order);
      await Promise.all(
        createOrder.orderCards.map(async (oc) => {
          const card = await this.cardService.findBy({ where: { id: oc.cardId } });
          if (!card) {
            throw new Error(`Card with id ${oc.cardId} not found`);
          }
          if (card.quantity < oc.quantity) {
            // TODO: bắn message thông báo user là card đã hết hàng
            throw new Error(`Not enough stock for card with id ${oc.cardId}`);
          }
          card.quantity -= oc.quantity;
          const orderCard = new OrderCard();
          orderCard.quantity = oc.quantity;
          orderCard.price = oc.price;
          orderCard.card = card;
          orderCard.order = newOrder;
          await manager.save(card);
          return await manager.save(orderCard);
        }),
      );
      const newBalance = user.balance - createOrder.total;
      if (newBalance < 0) {
        // TODO: bắn message thông báo user là không đủ tiền
        throw new Error('Insufficient balance');
      }
      user.balance = newBalance;
      await manager.save(user);
      return { newOrder, orderCards: createOrder.orderCards };
    });
    return transaction;
  }

  async confirm(changeStatus: ChangeStatus, userId: number) {
    // TODO: thay đổi trạng thái order pending -> completed or cancelled
    // TODO: bắn 1 message socket về cho user để thông báo
    // TODO: add card vào collection của user
    const order = await this.findBy({ where: { id: changeStatus.id } });
    if (changeStatus.status == OrderStatus.CANCELLED) {
      await this.cancelOrder(order, userId);
    }
    order.status = changeStatus.status;
    await this.save(order);
    const cards = order.orderCards.map((orderCard) => {
      const newCardDTO = new CardDTO();
      newCardDTO.atk = orderCard.card.atk;
      newCardDTO.def = orderCard.card.def;
      newCardDTO.attribute = orderCard.card.attribute.name;
      newCardDTO.cardCode = orderCard.card.cardCode;
      newCardDTO.description = orderCard.card.description;
      newCardDTO.imageUrl = orderCard.card.imageUrl;
      newCardDTO.level = orderCard.card.level;
      newCardDTO.price = orderCard.card.price;
      newCardDTO.quantity = orderCard.card.quantity;
      newCardDTO.type = orderCard.card.type.name;
      return newCardDTO;
    }) as unknown as CardDTO;
    await this.collectionService.addToCollection(userId, cards);
    return;
  }

  async cancelOrder(order: Order, userId: number) {
    const user = await this.userService.findById(userId);
    if (order.status !== OrderStatus.PENDING) {
      throw new BadRequestException("Only orders in 'PENDING' state can be canceled.");
    }
    console.log(order);

    await this.dataSource.manager.transaction(async (manager) => {
      order.status = OrderStatus.CANCELLED;
      user.balance += order.total;
      await this.userService.save(user);
      await Promise.all(
        order.orderCards.map(async (oc) => {
          const card = await this.cardService.findBy({ where: { id: oc.card.id } });
          console.log(card);
          card.quantity += oc.quantity;
          await this.cardService.save(card);
        }),
      );

      await manager.save(order);
    });
    return;
  }
}
