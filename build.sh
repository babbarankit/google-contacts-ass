echo 'Building Server'
cd packages/server
yarn build
echo 'Building Website'
cd ../web
NODE_ENV=production yarn build
echo 'Building Website Storybook'
yarn build-storybook