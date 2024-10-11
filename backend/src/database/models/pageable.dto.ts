import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class PageableDto {
  @IsOptional()
  order? = 'DESC';

  @IsInt()
  @Type(() => Number)
  @Min(1)
  @IsOptional()
  page? = 1;

  @IsInt()
  @Type(() => Number)
  @Min(1)
  @Max(50)
  @IsOptional()
  take? = 10;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
