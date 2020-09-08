import { Module } from '@nestjs/common';
import { HealthResolver } from './health.resolver';
import { HealthController } from './health.controller';

@Module({
  providers: [HealthResolver],
  controllers: [HealthController],
})
export class HealthModule {}
