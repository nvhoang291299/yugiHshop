import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import * as jwt from 'jsonwebtoken';

@WebSocketGateway(8081)
export class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(EventsGateway.name);
  private io = new Server();

  @WebSocketServer() server: Server;

  afterInit() {
    this.logger.log(`Initialized websocket in port 8081`);
  }

  handleConnection(socket: Socket) {
    this.logger.log(`Socket id:${socket.id} connected`);
    const token = socket.handshake.headers.authorizations;
    if (token) {
      try {
        const decoded = jwt.decode(token);
        void socket.join(decoded.email);
        console.log(socket.rooms);
        this.logger.log(`Connection with email ${decoded.email} success.`);
      } catch (error) {
        this.logger.error('Cannot connection:', error);
        this.handleDisconnect();
      }
    } else {
      this.handleDisconnect();
    }
  }

  handleDisconnect() {
    this.logger.log(`Websocket disconnected`);
  }

  @SubscribeMessage('ping')
  handleMessage(client: any, data: any) {
    this.logger.log(`Message received from client id: ${client.id}`);
    this.logger.debug(`Payload: ${data}`);
    return {
      event: 'pong',
      data: 'Wrong data that will make the test fail',
    };
  }
}
