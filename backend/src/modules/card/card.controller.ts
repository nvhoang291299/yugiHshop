import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/guards/authGuards.guard';
import { RoleGuard } from 'src/guards/roleGuards.guard';
import { ProductService } from './card.service';
import { CreateCardRequest } from './model/createCardRequest.model';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/types/role.enum';

@Controller('card/')
@UseGuards(AuthGuard, RoleGuard)
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getList() {
    return this.productService.findAll();
  }

  @Get('detail')
  @Roles([Role.SELLER])
  async getProduct(@Param('id') id: any) {
    try {
      const res = await this.productService.getProduct(id);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  @Post('create')
  // @Roles(Role.BUYER)
  @UseInterceptors(FileInterceptor('imageUrl'))
  async createCard(@Body() request: CreateCardRequest, @UploadedFile() imageUrl: Express.Multer.File) {
    try {
      console.log(imageUrl);
      const res = this.productService.createCard(request);
      return res;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Create new card fail!');
    }
  }
}
