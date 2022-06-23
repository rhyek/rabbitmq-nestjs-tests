import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'best_exchange',
          type: 'topic',
        },
      ],
      uri: 'amqp://guest:guest@localhost:5672',
      // finish bootstrap even if rabbitmq not online
      // and connect later
      connectionInitOptions: { wait: false },
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
