import { Server } from 'socket.io';
import { SocketType } from 'src/types/socket.type';

export class SocketService {
  private io = new Server();

  async emitMessage(userEmail: string, data: any) {
    await this.io.to(userEmail).emit(SocketType.ORDER_NOTIFY, data);
  }
}
