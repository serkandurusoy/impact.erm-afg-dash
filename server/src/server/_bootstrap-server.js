import express from 'express';
import compression from 'compression';
import path from 'path';
import validateEnvironmentVariables from './_validate-environment-variables';
import getDatabaseConnection from './_get-database-connection';
import setupAppContext from './_setup-app-context';
import setupSecurity from './_setup-security';
import rateLimiter from './_rate-limiter';
import handleNotFound from './_handle-not-found';
import catchAllErrors from './_catch-all-errors';

(async () => {
  validateEnvironmentVariables();

  const database = await getDatabaseConnection();

  const app = express();

  app.use(compression());

  setupSecurity(app);

  app.enable('trust proxy');

  if (process.env.NODE_ENV === 'production') {
    app.use(rateLimiter(database));
  }

  app.use(express.static(path.join(__dirname, '../public')));

  const router = express.Router();
  setupAppContext(app, database, router);

  app.use(handleNotFound);

  app.use(catchAllErrors);

  app.listen(parseInt(process.env.PORT, 10) || 8002);
})();
