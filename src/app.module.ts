import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongodbModule } from './mongodb/mongodb.module';
import { Web3Module } from './web3/web3.module';
import { EventsController } from './events/events.controller';
import { EventsModule } from './events/events.module';
  
@Module({
  imports: [MongodbModule, Web3Module, EventsModule],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}
