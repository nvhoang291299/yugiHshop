import { IsArray } from 'class-validator';
import { PageableDto } from './pageable.dto';

export class PageDto<T> {
  @IsArray()
  readonly data: [];

  readonly meta: PageableDto;

  constructor(data: [], meta: PageableDto) {
    (this.data = data), (this.meta = meta);
  }
}
