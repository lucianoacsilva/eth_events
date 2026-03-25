import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { WebSocketProvider, Contract, formatUnits, ContractEventPayload } from "ethers";
import abi from "../../utils/abi/usdt.json";
import { MongodbService } from 'src/mongodb/mongodb.service';
import IEvent from 'src/mongodb/dto/IEvent';

const {
  WEB_SOCKET_URL,
  SMART_CONTRACT_ADDRESS
} = process.env;

@Injectable()
export class Web3Service implements OnModuleInit {
  private web3: WebSocketProvider;
  private contract: Contract;
  private dbService: MongodbService = new MongodbService();

  async onModuleInit() {
    // Connect to Ethereum node using WebSocket
    this.web3 = new WebSocketProvider(
      WEB_SOCKET_URL ?? ""
    );

    this.contract = new Contract(SMART_CONTRACT_ADDRESS ?? "", abi, this.web3);

    this.contract.on("Transfer", async (
      from: string, 
      to: string, 
      value: number,
      eventPayload: ContractEventPayload
    ) => {
      const event: IEvent = {
          from,
          to,
          value: Number(formatUnits(value, 6)),
          name: eventPayload.eventName,
          txHash: eventPayload.log.transactionHash
        }
      console.log(event);

      await this.dbService.insert(event);
    });
  }
}
