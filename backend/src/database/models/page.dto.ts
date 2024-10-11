import { IsArray } from 'class-validator';
import { PageableDto } from './pageable.dto';

export class PageDto<T> {
  @IsArray()
  readonly data: T[];

  readonly page: number;

  readonly take: number;

  readonly itemCount: number;

  readonly pageCount: number;

  readonly hasPreviousPage: boolean;

  readonly hasNextPage: boolean;

  constructor(data: T[], { pageableDto, itemCount }: PageMetaDto) {
    this.data = data;
    this.page = pageableDto.page;
    this.take = pageableDto.take;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}

export interface PageMetaDto {
  pageableDto: PageableDto;
  itemCount: number;
}
