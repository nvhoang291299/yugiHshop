import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //   @Get('/info/:id')
  //   async getInfo(@Param('id') id: string) {
  //     const user = await this.userService.getInfo(id);
  //     const res = {
  //       username: user.username,
  //       fullname: user.fullName,
  //       phoneNumber: user.phoneNumber,
  //       balance: user.balance,
  //       email: user.email,
  //     };
  //     return res;
  //   }

  //   @Patch('/editUser/:id')
  //   async editInfo(@Param('id') id: string, @Body() updateUser: UpdateUser) {
  //     const user = await this.userService.editInfo(id, updateUser);
  //     return 'success!!!';
  //   }
}
