import { Injectable } from '@nestjs/common';
import { MongoClient, ServerApiVersion } from "mongodb";
import IEvent from './dto/IEvent';
import { config } from "dotenv";

config();

const {
    DB_PASSWORD,
    DB_USER,
    DB_HOST
} = process.env;

@Injectable()
export class MongodbService {
    private client: MongoClient = new MongoClient(
        `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:27017/`
    );
    

    async insert(event: IEvent) {
        try {
            await this.client.connect();

            await this.client.db("eventsdb").
                collection("Events")
                .insertOne(event);
            
        } catch (error) {
            console.log(error);
        } 


        
    }

}
