import { Optional } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';

export class CreateCardRequest {
  @IsString()
  name: string;

  @IsString()
  @Optional()
  level?: string;

  @IsString()
  @Optional()
  atk?: string;

  @IsString()
  @Optional()
  def?: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;

  @IsNumber()
  price: number;

  @IsNumber()
  ownerBy: number;

  @IsNumber()
  attribute: number;

  @IsNumber()
  type: number;
}
