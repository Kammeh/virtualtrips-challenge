import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import errorMiddleware from './routes/middleware/errorMiddleware';
import RoutesV1 from './routes/v1';

const runApp = () => {
  try {
    const app = express();

    app.set('json spaces', 2);

    app.use(cors());
    app.use(helmet());
    app.use(compression());

    app.use('/v1', RoutesV1);

    app.use(errorMiddleware);

    return { app };
  } catch (error) {
    console.log(error);
  }
}

export default runApp;
