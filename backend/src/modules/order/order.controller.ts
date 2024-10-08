import { BadRequestException, Body, Controller, Logger, Post, Put } from '@nestjs/common';
import { ChangeStatus } from './model/changeStatus.model';
import { CreateOrder } from './model/createOrder.model';
import { OrderService } from './order.service';

@Controller('order')
// @UseGuards(AuthGuard, RoleGuard)
export class OrderController {
  private readonly logger = new Logger(OrderController.name);
  constructor(private readonly orderService: OrderService) {}
  @Post('create')
  async createOrder(@Body() createOrder: CreateOrder) {
    try {
      const res = await this.orderService.createOrder(createOrder, 1);
      return res;
    } catch (error) {
      throw new BadRequestException('Create order failed.');
    }
  }

  @Put('confirm')
  async confirmOrder(@Body() changeStatus: ChangeStatus) {
    try {
      const res = await this.orderService.confirm(changeStatus, 1);
      return res;
    } catch (error) {
      throw new BadRequestException('Can not change order status.');
    }
  }
}
