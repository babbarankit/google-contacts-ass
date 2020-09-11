# Front End

## Important Highlights
 - Front End is built using React Library.
 - Since React is View only library, NextJS has been used for providing the routing.
 - NextJS also provide Dynamic Components to further reduce size by loading only initial components on screen.
 - Next JS also servers as a built tool which optimises bundle size.
 - SSR side rendering has been used.
 - Anonymous Pages are also cached statically in Memory.
 - Storybook is Used
## Important External Docuemntation

- [React](https://reactjs.org/)
- [Stled Components](https://styled-components.com/)
- [Graphql](https://graphql.org/)
- [Jest](https://jestjs.io)

## Running Application in Development Mode

### Quick Start Website
From Root Directory
```bash
  $ yarn start:dev
```

> Select **Website** and _Stroybook_ (optional, select if working on Styling)


- **How to access**

  - Visit http://localhost:3010 or xxx.ngrok.io for accessing website
  - Visit http://localhost:6006 for accessing storybook
  - The ports may be different depending upon Docker Port Mapping.

### Using PM2

```bash
$ pm status
$ pm2 logs web
$ pm2 restart web
```

### Understanding Codebase

### Manual Start Website

```bash
$ cd packages/web
$ yarn start:dev
# For Development of Storybook
$ yarn storybook
```
