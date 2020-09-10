import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Viewer } from './viewer.model';
import { ApolloError } from 'apollo-server-express';
import { Response, Request } from 'express';

@Resolver()
export class AuthResolver {
  constructor(private readonly service: AuthService) {}
  @Mutation((returns) => String)
  getGoogleOAuthUrl(): string {
    return this.service.getGoogleOAuthUrl();
  }

  @Mutation((returns) => Boolean)
  async signInGoogle(@Args('authCode') authCode: string, @Context('res') res: Response): Promise<boolean> {
    try {
      const viewer = await this.service.signInGoogle(authCode);
      await this.service.setAuthCookies(viewer, res);
      return true;
    } catch (err) {
      throw new ApolloError(err, 'AuthorizationFailed');
    }
  }

  @Mutation((returns) => Boolean)
  logout(@Context('res') res: Response, @Context('req') req: Request): Promise<boolean> {
    return this.service.logout(req, res);
  }

  @Query((returns) => Viewer)
  getViewer(@Context('viewer') viewer: Viewer) {
    return viewer;
  }
}
