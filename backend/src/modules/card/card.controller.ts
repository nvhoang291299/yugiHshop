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
import { AuthGuard } from 'guards/authGuard.guard';
import { ProductService } from './card.service';
import { CreateCardRequest } from './model/createCardRequest.model';
import { Roles } from 'decorators/role.decorator';
import { Role } from 'src/types/role.enum';
import { RoleGuard } from 'guards/roleGuard.guard';

@Controller('card/')
@UseGuards(AuthGuard, RoleGuard)
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getList() {
    return this.productService.findAll();
  }

  @Get('/:id')
  getProduct(@Param('id') id: any) {
    return this.productService.findById(id);
  }

  @Post('create')
  @Roles(Role.BUYER)
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
