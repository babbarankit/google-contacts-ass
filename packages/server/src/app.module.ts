import { Module, MiddlewareConsumer } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { AuthModule } from './auth/auth.module';
import googleOauthConfig from './auth/google-oauth.config';
import { join } from 'path';
import authConfig from './auth/auth.config';
import { AuthMiddleware } from './auth/auth.middleware';
import { ContactModule } from './contacts/contact.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env', '.env.production'],
      load: [configuration, googleOauthConfig, authConfig],
    }),
    ContactModule,
    GraphQLModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const isProduction = configService.get('env') === 'production';
        return {
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          cors: false,
          playground: {
            settings: {
              'request.credentials': 'include',
            },
          },
          uploads: false,
          debug: isProduction ? false : true,
          resolverValidationOptions: {
            requireResolversForResolveType: false,
          },
          context: ({ req, res }) => {
            return {
              viewer: res.locals.viewer,
              ctx: res.locals.ctx,
              res,
              req,
            };
          },
        };
      },
      inject: [ConfigService],
    }),
    HealthModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // Require Authenticated User
    consumer.apply(AuthMiddleware).forRoutes('/graphql');
  }
}
