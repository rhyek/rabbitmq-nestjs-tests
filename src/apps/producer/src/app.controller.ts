import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly appService: AppService) {}

  @Post('create-todo')
  async createTodo(
    @Body() { todo }: { todo: { description: string } },
  ): Promise<string> {
    this.logger.log(`new todo: ${todo.description}`);
    await this.appService.createTodo(todo);
    return 'ok';
  }
}
