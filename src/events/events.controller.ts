import { Controller, Get, Query} from '@nestjs/common';
import type IEvent from 'src/mongodb/dto/IEvent';
import { MongodbService } from 'src/mongodb/mongodb.service';

@Controller('events')
export class EventsController {
    constructor (private readonly mongodbService: MongodbService) {}

    @Get()
    async get(@Query() query: IEvent) {
        return await this.mongodbService.get(query);
    }

}
