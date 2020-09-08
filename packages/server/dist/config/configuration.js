"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.default = () => {
    const disableCors = process.env.DISABLE_CORS === 'true';
    const corsOrigin = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split('') : [];
    let allowedOrigins = corsOrigin.map((origin) => utils_1.getSiteRegExp(origin));
    if (disableCors) {
        allowedOrigins = [new RegExp(`^(?:https|http)\:\/\/localhost\:[0-9]+$`), ...allowedOrigins];
    }
    const corsOptions = {
        origin: allowedOrigins,
        optionsSuccessStatus: 200,
        credentials: true,
        maxAge: 3600,
        methods: ['GET', 'POST', 'OPTIONS'],
    };
    return {
        port: parseInt(process.env.PORT, 10) || 3090,
        env: process.env.NODE_ENV || 'development',
        corsOptions,
    };
};
//# sourceMappingURL=configuration.js.map