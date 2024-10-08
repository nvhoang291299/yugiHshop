import { IsNumber, IsString } from 'class-validator';

export class CardDTO {
  @IsString()
  cardCode: string;

  @IsString()
  name: string;

  @IsString()
  level?: string;

  @IsString()
  atk?: string;

  @IsString()
  def?: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsNumber()
  ownerBy: number;

  @IsString()
  attribute: string;

  @IsString()
  type: string;
}
