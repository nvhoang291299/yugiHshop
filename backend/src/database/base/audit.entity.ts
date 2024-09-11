import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class AuditEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @CreateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column({ type: 'uuid', nullable: true })
  createdBy: string;

  @Column({ type: 'uuid', nullable: true })
  updatedBy: string;
}
