import { Get, Controller } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get('/health')
  root(): object {
    return { status: 'live' };
  }
}
