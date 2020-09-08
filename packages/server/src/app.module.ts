import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      load: [configuration],
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const isProduction = configService.get('env') === 'production';
        return {
          autoSchemaFile: true,
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
export class AppModule {}
