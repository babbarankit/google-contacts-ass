FROM node:12.18.3-alpine3.11 as base
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git vim
RUN yarn global add cross-env pm2
RUN yarn config set network-timeout 600000 -g
WORKDIR /apps
FROM base as packages
# Install Files For Installing Packages
COPY ./yarn.lock ./yarn.lock
COPY ./package.json ./package.json
COPY ./packages/server/package.json ./packages/server/package.json
COPY ./packages/web/package.json ./packages/web/package.json
RUN yarn install --frozen-lockfile --production
FROM packages as apps
COPY ./packages/server/dist ./packages/server/dist
COPY ./packages/web/public ./packages/web/public
COPY ./packages/web/dist ./packages/web/dist
COPY ./packages/web/.babelrc ./packages/web/.babelrc
COPY ./packages/web/next.config.js ./packages/web/next.config.js
COPY ./packages/web/.env.production ./packages/web/.env.production
COPY ./app.yml ./app.yml
COPY ./app.yml ./app.yml
COPY ./packages/server/.env ./packages/server/.env
COPY ./packages/server/.env.production ./packages/server/.env.production

EXPOSE 3090
EXPOSE 3010
CMD ["pm2-runtime", "app.yml"]