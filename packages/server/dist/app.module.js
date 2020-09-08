"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const health_module_1 = require("./health/health.module");
const graphql_1 = require("@nestjs/graphql");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env.local', '.env'],
                load: [configuration_1.default],
            }),
            graphql_1.GraphQLModule.forRootAsync({
                useFactory: (configService) => {
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
                inject: [config_1.ConfigService],
            }),
            health_module_1.HealthModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map