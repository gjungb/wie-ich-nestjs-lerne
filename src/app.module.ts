import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceholderModule } from './placeholder/placeholder.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PlaceholderModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
