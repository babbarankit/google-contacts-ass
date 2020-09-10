import { registerAs } from '@nestjs/config';

export default registerAs('googleOauth', () => ({
  clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
  clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_OAUTH_REDIRECT_URI,
  scopes: process.env.GOOGLE_OAUTH_SCOPES,
}));
