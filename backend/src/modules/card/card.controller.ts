import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/decorators/role.decorator';
import { AuthGuard } from 'src/guards/authGuards.guard';
import { RoleGuard } from 'src/guards/roleGuards.guard';
import { Role } from 'src/types/role.enum';
import { CardService } from './card.service';
import { CreateCardRequest } from './model/createCardRequest.model';
import { PageableDto } from 'src/database/models/pageable.dto';
import { CardDTO } from './model/card.dto';
import { PageDto } from 'src/database/models/page.dto';

@Controller('card')
@UseGuards(AuthGuard, RoleGuard)
export class CardController {
  private readonly logger = new Logger(CardController.name);
  constructor(private cardService: CardService) {}

  @Get()
  async getList(@Query() pageableDto: PageableDto): Promise<PageDto<CardDTO>> {
    try {
      console.log(pageableDto);
      const res = await this.cardService.getListProduct(pageableDto);
      return res;
    } catch (error) {
      this.logger.error('Get list card failed.', error);
    }
  }

  @Get('detail')
  async getProduct(@Query('id') id: number) {
    try {
      const res = await this.cardService.getProduct(id);
      return res;
    } catch (error) {
      this.logger.error('Get card detail failed.', error);
    }
  }

  @Post('create')
  @Roles([Role.ADMIN])
  @UseInterceptors(FileInterceptor('imageUrl'))
  async createCard(@Body() request: CreateCardRequest, @UploadedFile() imageUrl: Express.Multer.File) {
    try {
      const res = await this.cardService.createCard(request, imageUrl);
      return res;
    } catch (error) {
      this.logger.error('Create card failed.', error);
      throw new BadRequestException('Create new card fail!');
    }
  }
}
