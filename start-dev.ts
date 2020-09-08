import * as prompts from 'prompts';
import { Logger } from '@nestjs/common';
import * as shell from 'shelljs';

(async () => {
  const logger = new Logger();
  const build = process.argv[2] === 'build';
  const response = await prompts([
    {
      type: 'multiselect',
      name: 'services',
      message: 'Please Choose Services you will like to start',
      choices: [
        { title: 'Server', value: 'server' },
        { title: 'Website Storybook', value: 'storybook' },
        { title: 'Website', value: 'web' },
      ],
    },
  ]);
  shell.exec('pm2 delete all');
  let services: string[] = response.services;

  if (services.includes('server')) {
    //Add Server Watch Script
    services = [...services, 'serverWatch'];
    logger.log('Building Server...');
    shell.exec('cd packages/server && tsc');
  }
  shell.exec(`pm2 start app-dev.yml --only ${services.join(',')}`);
  process.exit(0);
})();