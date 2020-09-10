import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthMiddleware } from './auth.middleware';

@Module({
  exports: [AuthService],
  providers: [AuthService, AuthResolver, AuthMiddleware],
})
export class AuthModule {}
