import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base/baseEntity.entity';
import { IsNumber, IsString } from 'class-validator';
import { AttributeCard } from './attribute-card.entity';
import { TypeCard } from './type-card.entity';

@Entity()
export class Card extends BaseEntity {
  @Column()
  @IsString()
  name: string;

  @Column({ nullable: true })
  level?: string;

  @Column({ nullable: true })
  atk?: string;

  @Column({ nullable: true })
  def?: string;

  @Column()
  @IsString()
  description: string;

  @Column()
  @IsString()
  imageUrl: string;

  @Column()
  @IsNumber()
  price: number;

  @Column()
  @IsNumber()
  ownerBy: number;

  @ManyToOne(() => AttributeCard, (attributeCard) => attributeCard.cards)
  attribute: AttributeCard;

  @ManyToOne(() => TypeCard, (typeCard) => typeCard.cards)
  type: TypeCard;
}
