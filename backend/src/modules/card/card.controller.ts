import {
  BadRequestException,
  Body,
  Controller,
  Get,
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

@Controller('card')
@UseGuards(AuthGuard, RoleGuard)
export class CardController {
  constructor(private cardService: CardService) {}

  @Get()
  getList() {
    return this.cardService.findAll({ order: { createdAt: 'DESC' } });
  }

  @Get('detail')
  async getProduct(@Query('id') id: number) {
    try {
      const res = await this.cardService.getProduct(id);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  @Post('create')
  @Roles([Role.ADMIN])
  @UseInterceptors(FileInterceptor('imageUrl'))
  async createCard(@Body() request: CreateCardRequest, @UploadedFile() imageUrl: Express.Multer.File) {
    try {
      console.log(imageUrl);
      const res = await this.cardService.createCard(request, imageUrl);
      return res;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Create new card fail!');
    }
  }
}
