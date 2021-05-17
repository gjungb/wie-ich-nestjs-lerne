import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PlaceholderService } from './placeholder/placeholder.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly placeholder: PlaceholderService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers() {
    return this.placeholder.readUsers();
  }
}
