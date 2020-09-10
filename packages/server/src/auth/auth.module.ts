import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthMiddleware } from './auth.middleware';
import { ContactModule } from '../contacts/contact.module';

@Module({
  exports: [AuthService],
  providers: [AuthService, AuthResolver, AuthMiddleware],
  imports: [ContactModule],
})
export class AuthModule {}
