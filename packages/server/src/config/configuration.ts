import { getSiteRegExp } from '../utils';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export default () => {
  const disableCors = process.env.DISABLE_CORS === 'true';
  const corsOrigin = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : [];
  let allowedOrigins: Array<string | RegExp> | string = corsOrigin.map((origin) => getSiteRegExp(origin));
  if (disableCors) {
    allowedOrigins = [new RegExp(`^(?:https|http)\:\/\/localhost\:[0-9]+$`), ...allowedOrigins];
  }

  const corsOptions: CorsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
    credentials: true,
    maxAge: 3600,
    methods: ['GET', 'POST', 'OPTIONS'],
  };
  return {
    port: parseInt(process.env.PORT, 10) || 3090,
    nodeEnv: process.env.NODE_ENV || 'development',
    corsOptions,
  };
};
