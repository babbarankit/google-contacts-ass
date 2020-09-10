import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Viewer } from './viewer.model';
import { ApolloError } from 'apollo-server-express';
import { Response, Request } from 'express';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly service: AuthService) {}
  @Mutation((returns) => String, { description: 'Get Google OAuth Url' })
  getGoogleOAuthUrl(): string {
    return this.service.getGoogleOAuthUrl();
  }

  @Mutation((returns) => Boolean, { description: 'Sign In Using Google OAuth' })
  async signInGoogle(@Args('authCode') authCode: string, @Context('res') res: Response): Promise<boolean> {
    try {
      const { viewer, accessToken } = await this.service.signInGoogle(authCode);
      await this.service.setAuthCookies(viewer, res, accessToken);
      return true;
    } catch (err) {
      throw new ApolloError(err, 'AuthorizationFailed');
    }
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => Boolean, { description: 'Logout User' })
  logout(@Context('res') res: Response, @Context('req') req: Request): Promise<boolean> {
    return this.service.logout(req, res);
  }

  @Query((returns) => Viewer, { description: 'Get Logged In User Info' })
  getViewer(@Context('viewer') viewer: Viewer) {
    return viewer;
  }
}
