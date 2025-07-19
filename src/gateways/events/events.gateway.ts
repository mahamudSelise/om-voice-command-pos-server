import { IEvent } from '@interfaces';
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server, WebSocket } from 'ws';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): string {
    console.log(`Received message from client: ${data}`);

    return `Server received: ${data}`;
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: unknown): unknown {
    console.log('Received "events" data:', data);

    this.server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({ event: 'new_event_from_server', data: data }),
        );
      }
    });
    return { event: 'reply', data: 'Event received and processed!' };
  }

  broadcastMessage(event: IEvent): void {
    this.server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(event));
      }
    });
  }
}
