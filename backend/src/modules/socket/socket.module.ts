import { Module } from '@nestjs/common';
import { EventsGateway } from 'src/events.gateway';
import { SocketService } from './socket.service';

@Module({
  providers: [EventsGateway, SocketService],
  exports: [SocketService],
})
export class SocketModule {}
