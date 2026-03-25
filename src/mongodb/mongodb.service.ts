import { Injectable } from '@nestjs/common';
import { MongoClient, ServerApiVersion } from "mongodb";
import IEvent from './dto/IEvent';

const {
    DB_PASSWORD,
    DB_USER,
    DB_APP_NAME
} = process.env;

@Injectable()
export class MongodbService {
    private client: MongoClient = new MongoClient(
        `mongodb://lucigol:lucigolpw@testcluster.dkervvi.mongodb.net/?appName=TestCluster`,
        {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true
            }
        }
    );

    async insert (event: IEvent) {
        await this.client.connect();
        console.log("Oi")

        this.client.db("eventsdb").
            collection("Events")
            .insertOne(event);

        await this.client.close();
    }

}
