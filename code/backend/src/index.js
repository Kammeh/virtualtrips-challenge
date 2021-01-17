import runApp from './app';

process.env.TZ = 'UTC';

const appPort = 4000;

const start = async () => {
  const { app } = await runApp();
  app.listen(appPort);
  console.info(`Express application is up and running on port ${appPort}`);
}

start();