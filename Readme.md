# Google Contacts Application

**SPIC MACAY Sever, Front End and more.**

## Highlights

- **Backend Application**: Build using [**Nest JS Framework**](https://nestjs.com)

- **Frontend Application**: Build using React with [**NextJS**](https://nextjs.org)

## Starting Development

_Running this first time require .env file check Environment Settings below_

```bash
# Start Docker
$ docker-compose up -d
# Jump to docker console
$ docker exec -it [dir_name]_dev_1 bash
# if there is any error check docker name by docker ps
```

### Start Application

```bash
  $ yarn start:dev
```


### PM2 Services

- **Server**: This must be started if you want to run Server Application.
  - Check logs from console: `pm2 logs server`
  - Access Server in Browser: http://localhost:3090/graphql
  - Above Port may vary based on Docker Ports Env.
- **Website Storybook**: This must be started when you want to run Website Storybook.
  - Check logs from console: `pm2 logs storybook`
  - Access website storybook: http://localhost:6006
  - Above Port may vary based on Docker Ports Env.
- **Website:** This must be started when you want to run Website.
  - Check logs from console: `pm2 logs web`
  - Access website: http://localhost:3010
  - Above Port may vary based on Docker Ports Env.

_Please select and start application optimally_


## Initial Setup Configuration

### Environment Settings

- sample.env files in different directories can be copy pasted to .env files.
- For Running Any Application, root folder must have **.env** for Docker Ports Mapping.
- For Running Server **.env** must exist. Few secrets will be shared in person.
- For Running Website **.env.local** and **.env.development** must exist.


### Install Packages

```bash
$ yarn install --frozen-lockfile
```
