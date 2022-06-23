import { NewTodoReceivedEvent, newTodoReceivedEventPattern } from '@app/events';
import { Injectable, Logger } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class AppService {
  private readonly logger = new Logger(this.constructor.name);

  @RabbitSubscribe({
    exchange: 'best_exchange',
    routingKey: newTodoReceivedEventPattern,
    queue: `${newTodoReceivedEventPattern}-queue-1`,
  })
  newTodoReceivedEventHandler(evt: NewTodoReceivedEvent) {
    this.logger.log(`handling todo: ${evt.todo.description}`);
  }
}
