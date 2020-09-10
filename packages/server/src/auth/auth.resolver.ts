import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly service: AuthService) {}
  @Mutation((returns) => String)
  getGoogleOAuthUrl(): string {
    return this.service.getGoogleOAuthUrl();
  }

  @Mutation((returs) => Boolean)
  signInGoogle(@Args('authCode') authCode: string) {
    return this.service.signInGoogle(authCode);
  }
}
