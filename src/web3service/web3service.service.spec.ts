import { Test, TestingModule } from '@nestjs/testing';
import { Web3serviceService } from './web3service.service';

describe('Web3serviceService', () => {
  let service: Web3serviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Web3serviceService],
    }).compile();

    service = module.get<Web3serviceService>(Web3serviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
