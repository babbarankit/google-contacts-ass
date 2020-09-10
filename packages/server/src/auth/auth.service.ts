import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cookie from 'cookie';
import * as jwt from 'jsonwebtoken';
import { Viewer } from './viewer.model';
import { Response, Request } from 'express';
import { ApolloError } from 'apollo-server-express';

export const ACCESS_TOKEN_COOKIE = 'access_token';
export const TOKEN_LIFETIME_COOKIE = 'token_lifetime';

@Injectable()
export class AuthService {
  private logger: Logger;
  constructor(private readonly configService: ConfigService) {
    this.logger = new Logger('Auth');
  }

  /**
   * Get Google OAuth Url
   */
  getGoogleOAuthUrl() {
    let GoogleOAuth2Url = 'https://accounts.google.com/o/oauth2/v2/auth';
    let reqParams = [
      `redirect_uri=${this.configService.get<string>('googleOauth.redirectUri')}`,
      'response_type=code',
      `client_id=${this.configService.get<string>('googleOauth.clientId')}`,
      `scope=${this.configService.get<string>('googleOauth.scopes')}`,
      'access_type=offline',
    ].join('&');
    const url = `${GoogleOAuth2Url}?${reqParams}`;
    return url;
  }

  /**
   * Sign In Google OAuth - Auth Flow
   */
  signInGoogle(authCode: string): Viewer {
    const viewer = new Viewer();
    viewer.id = authCode;
    return viewer;
  }

  /**
   * Verify Access Token
   */
  verifyAccessToken(authToken: string) {
    try {
      const secret = this.configService.get('auth.jwtSecret');
      const parsedToken = jwt.verify(authToken, secret);
      return parsedToken;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  /**
   * Get Viewer
   */
  getViewer(req: Request): Viewer {
    let viewer = new Viewer();
    viewer.id = 'anonymous';
    const cookies = cookie.parse(req.headers.cookie || '');
    let bearerToken = cookies[ACCESS_TOKEN_COOKIE];
    if (bearerToken) {
      const verifiedViewer = this.verifyAccessToken(bearerToken);
      if (verifiedViewer) {
        viewer = (verifiedViewer as any).viewer;
      }
    }
    return viewer;
  }

  /**
   * Generate Access Token
   */
  generateAccessToken(viewer: Viewer): string {
    const secret = this.configService.get('auth.jwtSecret');
    const expiresIn = this.configService.get<number>('auth.jwtExpiresIn');
    try {
      return jwt.sign({ viewer }, secret, { expiresIn });
    } catch (error) {
      this.logger.error(
        `message: ${error.message}; query: ${error.query}; parameters: ${error.parameters}`,
        error.stack,
      );
      throw new ApolloError(error.message, error.name);
    }
  }

  /**
   * Helper function to set cookies
   */
  async setAuthCookies(
    viewer: Viewer,
    res: Response,
  ): Promise<{
    data: { accessTokenExpiresAt: string };
    viewer: Viewer;
  }> {
    const accessToken = this.generateAccessToken(viewer);
    const domain = this.configService.get('auth.cookieDomain');
    const accessTokenExpiresIn = this.configService.get<number>('auth.jwtExpiresIn');
    const accessTokenExpiresAt = new Date(Date.now() + accessTokenExpiresIn * 1000);
    const tokenLifeTime = {
      accessTokenExpiresAt: accessTokenExpiresAt.toISOString(),
    };
    const secure = this.configService.get('auth.cookieSecure');
    const sameSite = secure ? 'strict' : undefined;
    res.setHeader('Set-Cookie', [
      cookie.serialize(ACCESS_TOKEN_COOKIE, accessToken, {
        httpOnly: true,
        domain,
        maxAge: accessTokenExpiresIn,
        secure,
        path: '/',
        sameSite,
      }),
      cookie.serialize(TOKEN_LIFETIME_COOKIE, JSON.stringify(tokenLifeTime), {
        domain,
        maxAge: accessTokenExpiresIn,
        secure,
        path: '/',
        sameSite,
      }),
    ]);
    return {
      data: tokenLifeTime,
      viewer,
    };
  }

  /**
   * Logout Function
   */
  async logout(_: Request, res: Response) {
    const domain = this.configService.get('auth.cookieDomain');
    const secure = this.configService.get('auth.cookieSecure');
    const sameSite = secure ? 'strict' : undefined;
    res.setHeader('Set-Cookie', [
      cookie.serialize(ACCESS_TOKEN_COOKIE, undefined, {
        httpOnly: true,
        domain,
        maxAge: 0,
        secure,
        path: '/',
        sameSite,
      }),
      cookie.serialize(TOKEN_LIFETIME_COOKIE, undefined, {
        domain,
        maxAge: 0,
        secure,
        path: '/',
        sameSite,
      }),
    ]);
    return true;
  }
}
