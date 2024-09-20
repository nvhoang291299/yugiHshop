import { BadRequestException, Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { AuthGuard } from 'src/guards/authGuards.guard';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/info')
  async getInfo(@CurrentUser('id') id: number) {
    try {
      const user = await this.userService.getProfile(id);
      return user;
    } catch (error) {
      throw new BadRequestException('User not found');
    }
  }

  //   @Patch('/editUser/:id')
  //   async editInfo(@Param('id') id: string, @Body() updateUser: UpdateUser) {
  //     const user = await this.userService.editInfo(id, updateUser);
  //     return 'success!!!';
  //   }
}
