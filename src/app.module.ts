import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Web3Service } from './web3/web3service.service';
import { ConfigModule } from '@nestjs/config';
import { MongodbModule } from './mongodb/mongodb.module';
import { Web3Module } from './web3/web3.module';
  
@Module({
  imports: [MongodbModule, Web3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
