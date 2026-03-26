import { Module } from '@nestjs/common';
import { MongodbModule } from 'src/mongodb/mongodb.module';
import { EventsController } from './events.controller';
import { MongodbService } from 'src/mongodb/mongodb.service';

@Module({
    imports: [],
    providers: [EventsController, MongodbService]
})
export class EventsModule {}
