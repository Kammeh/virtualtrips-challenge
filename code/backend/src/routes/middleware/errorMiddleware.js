import HttpException from '../exceptions/HttpException';

const errorMiddleware = (error, request, response, next) => {
  const isHttpException = error instanceof HttpException;

  if (!isHttpException) {
    console.error(`Unexpected error occured: "${error.message}"`);
    console.debug(`Error stack: "${error.stack}"`);
  }

  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  const details = error.details || null;

  response.status(status).json({
    message,
    details,
  });
}

export default errorMiddleware;
