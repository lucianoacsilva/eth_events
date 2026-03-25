import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Web3Service } from './web3service.service';
import { MongodbService } from 'src/mongodb/mongodb.service';

@Module({
    imports: [ConfigModule.forRoot()],
    providers: [Web3Service, MongodbService]
})
export class Web3Module {}
