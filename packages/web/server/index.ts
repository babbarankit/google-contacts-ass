import { parse } from 'url';
import next from 'next';
import cacheableResponse from 'cacheable-response';
import Keyv from 'keyv';
import express from 'express';
import { extname } from 'path';
import { isTokenValidOrUndefined } from '../src/utils';

const port = parseInt(process.env.PORT || '3010', 10);
const homeCacheMin = parseInt(process.env.HOME_CACHE_MIN || '2', 10);
const pageCacheMin = parseInt(process.env.PAGE_CACHE_MIN || '10', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const cache = new Keyv();

const getSsrCache = (minutes: number) => {
  // When Cache Is Disabled
  if (dev) {
    return async ({ req, res }) => {
      return handle(req, res);
    };
  }
  return cacheableResponse({
    ttl: 1000 * 60 * minutes,
    cache, // setup your cache here
    get: async ({ req, res, pagePath, queryParams }) => ({
      data: await app.renderToHTML(req, res, pagePath, queryParams),
    }),
    send: ({ data, res }) => (res as any).send(data),
  });
};
app.prepare().then(() => {
  const server = express();
  server.disable('x-powered-by');

  server.get('/', (req, res) => {
    const cookieStatus = isTokenValidOrUndefined(req.headers.cookie);
    if (cookieStatus === 'not-present') {
      const ssrCache = getSsrCache(homeCacheMin);
      return ssrCache({ req, res, pagePath: '/' });
    }
    return handle(req, res);
  });

  server.get('/cache/flush', async (_, res) => {
    await cache.clear();
    // I send 205 code to say "hey, cache is flushed"
    return res.status(205).send();
  });

  server.get('/cache/:url', async (req, res) => {
    await cache.delete(`${req.params.url}`);
    // I send 205 code to say "hey, cache is flushed"
    return res.status(205).send();
  });

  server.get('/_next/*', (req, res) => {
    /* serving _next static content using next.js handler */
    return handle(req, res);
  });

  server.get('/admin/*', (req, res) => {
    /* serving _next static content using next.js handler */
    return handle(req, res);
  });

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url!, true);
    const { pathname } = parsedUrl;
    const cookieStatus = isTokenValidOrUndefined(req.headers.cookie);
    // Skip Cache for admin or Next Pages or Whenever a cookie is present!
    const pathExt = extname(pathname);
    if (pathExt.length !== 0) {
      return handle(req, res);
    }
    if (cookieStatus === 'not-present') {
      const ssrCache = getSsrCache(pageCacheMin);
      return ssrCache({ req, res, pagePath: pathname });
    }
    return handle(req, res);
  });
  server.listen(port, ((err: any) => {
    if (err) {
      throw err;
    }
    console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
  }) as any);
});
