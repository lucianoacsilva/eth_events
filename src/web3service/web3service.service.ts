import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { config } from "dotenv";
import { WebSocketProvider, Contract, formatUnits} from "ethers";
import abi from "../../abi/usdt.json";

config();


const {
    WEB_SOCKET_URL,
    SMART_CONTRACT_ADDRESS
} = process.env;

@Injectable()
export class Web3serviceService implements OnModuleInit {
  private web3: WebSocketProvider;
  private contract: Contract;

  async onModuleInit() {
    // Connect to Ethereum node using WebSocket
    this.web3 = new WebSocketProvider(
      WEB_SOCKET_URL ?? ""
    );

    this.contract = new Contract(SMART_CONTRACT_ADDRESS ?? "", abi, this.web3);

    this.subscribeToEvents();
  }

  private subscribeToEvents() {
    this.contract.on("Transfer", (from, to, value, event) => {
        console.log(
            JSON.stringify(
                {
                    from,
                    to,
                    value: formatUnits(value,6),
                    event
                }
            )
        );
    } );
  }


}
