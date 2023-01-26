import {
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  afterInit(server: any) {
    console.log('Client Connected');
  }
  //   constructor() {
  //   }
  @WebSocketServer() server: Server;
  handleConnection(client: any, ...args: any[]) {
    console.log('Client Connected With SocketID:', client.id);
  }
  handleDisconnect(client: any) {
    console.log('Client Disconnected With SocketID:', client.id);
  }

  @SubscribeMessage('join-room')
  async joinRoom(@MessageBody() body: any, @ConnectedSocket() socket: Socket) {
    console.log(socket.id);
  }

  //   @SubscribeMessage('send-message')
  //   async sendMessage(
  //     @MessageBody() body: any,
  //     @ConnectedSocket() socket: Socket,
  //   ) {
  //     console.log();
  //   }
}
