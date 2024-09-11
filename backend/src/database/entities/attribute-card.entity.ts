import { Column, Entity, OneToMany } from 'typeorm';
import { Card } from './card.entity';
import { AuditEntity } from '../base/audit.entity';

@Entity()
export class AttributeCard extends AuditEntity {
  @Column()
  name: string;

  @OneToMany(() => Card, (card) => card.attribute)
  cards: Card[];
}
