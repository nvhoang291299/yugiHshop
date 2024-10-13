import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { AuthGuard } from 'src/guards/authGuards.guard';
import { RoleGuard } from 'src/guards/roleGuards.guard';
import { CollectionService } from './collection.service';

@Controller('collection')
@UseGuards(AuthGuard, RoleGuard)
export class CollectionController {
  private readonly logger = new Logger(CollectionController.name);
  constructor(private readonly collectionService: CollectionService) {}

  @Get()
  async getCollections(@CurrentUser('id') userId: number) {
    try {
      const res = this.collectionService.collectionByUserId(userId);
      return res;
    } catch (error) {
      this.logger.error('Can not get collections.');
    }
  }

  // @Get()
  // async getCardInCollection(@Query('cardCode') cardCode: string,@CurrentUser('id') userId: number) {
  //   try {
  //     const res = await this.collectionService.infoCard(cardCode, userId);
  //     return res;
  //   } catch (error) {
  //     this.logger.error('get detail card failed.');
  //     throw new BadRequestException(error);
  //   }
  // }
}
