# Backend Server

## Important Hightlights
- Backend is NodeJS Server.
- NestJS has been choosen as the Platfiorm Independent Backend Framework.
 - All code is written in Typescript.
- Its a GraphQL API Server built using Apollo GraphQL Server Beneath NestJS.

## Important External Docuemntation

- [TypeOrm](https://typeorm.io/)
- [NestJs](https://docs.nestjs.com/)
- [Graphql](https://graphql.org/)
- [Jest](https://jestjs.io)

## Running Application in Development Mode

### Quick Start Website
From Root Directory
```bash
  $ yarn start:dev
```

> Select **Server**

### Using PM2

```bash
$ pm2 status
$ pm2 logs server
$ pm2 restart server
```

### Playground

- **How to access**

  - Visit http://localhost:3090/graphql
  - The port may be different depending upon Docker Port Mapping.

- **Simple Anonymous query**

```bash
{
  anonymousHealth
}
```

- **Simple authenticated query**

```bash
{
  authenticatedHealth
}
```

### Access Postgres Database from Pgadmin UI

- Go to http://localhost:49000
- Above Port may vary based on Docker Ports Env.
- Credentials: Email- root@localhost, password - root
- Add a Server based on your server .env file _{host: 'db', username: 'postgres', database: 'spicmacay', password: 'root'}_

### Manual Start Server (Optional)

```bash
$ cd packages/server
$ yarn start:dev
# For Development Watch Mode Start a new process from same directory
$ tsc -W
```

- Visit http://localhost:3090/graphql
- The port may be different depending upon Docker Port Mapping.
