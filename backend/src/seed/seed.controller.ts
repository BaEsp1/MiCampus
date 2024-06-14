import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

import { ValidRoles } from 'src/auth/interfaces';
import { ApiExcludeEndpoint } from '@nestjs/swagger';


@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @ApiExcludeEndpoint()
  @Get()
  // @Auth(ValidRoles.admin)
  executeSeed() {
    return this.seedService.runSeed();
  }

}

