import { HttpModule, Module } from '@nestjs/common';
import { PlaceholderService } from './placeholder.service';

@Module({
  imports: [HttpModule],
  exports: [PlaceholderService],
  providers: [PlaceholderService],
})
export class PlaceholderModule {}
