import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Base {
  @Prop({ default: () => new Date() })
  createdAt: Date;

  @Prop({ default: () => new Date() })
  updatedAt: Date;
}
