import { Module } from '@nestjs/common';
import { ChatModule } from './ChatGateway/chat.module';

@Module({
  imports: [ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
