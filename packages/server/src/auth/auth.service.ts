import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}

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

  signInGoogle(authCode: string) {
    return true;
  }
}
