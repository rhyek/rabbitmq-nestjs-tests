import { NewTodoReceivedEvent, newTodoReceivedEventPattern } from '@app/events';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly amqpConnection: AmqpConnection) {}

  createTodo(todo: { description: string }): void {
    this.logger.log(`publishing: ${todo.description}`);
    const message: NewTodoReceivedEvent = {
      todo,
    };
    this.amqpConnection.publish(
      'best_exchange',
      newTodoReceivedEventPattern,
      message,
    );
  }
}
