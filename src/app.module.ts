import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Web3serviceService } from './web3service/web3service.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Web3serviceService],
})
export class AppModule {}
