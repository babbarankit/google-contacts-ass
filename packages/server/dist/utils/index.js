"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSiteRegExp = (url) => {
    const [site, domain] = url.split('.');
    return new RegExp(`^(?:https|http)\:\/\/(?:.+[.])?${site}[.]${domain}$`);
};
//# sourceMappingURL=index.js.map