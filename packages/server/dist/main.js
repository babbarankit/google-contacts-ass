"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const bodyParser = require("body-parser");
const config_1 = require("@nestjs/config");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const serverStartLabel = 'Server App Started in';
        console.time(serverStartLabel);
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const logger = new common_1.Logger(bootstrap.name);
        const configService = app.get(config_1.ConfigService);
        console.log('x \n');
        const env = configService.get('env');
        const port = configService.get('port');
        const corsOptions = configService.get('corsOptions');
        app.enableCors(corsOptions);
        app.use(bodyParser.json({ limit: '50mb' }));
        app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        app.disable('x-powered-by');
        yield app.listen(port);
        console.timeEnd(serverStartLabel);
        logger.log(`App is running at http://localhost:${port} in ${env} mode`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map