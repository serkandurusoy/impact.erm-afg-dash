import bodyParser from 'body-parser';
import controller from '../controller';

const setupAppContext = (app, database, router) => {
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

  app.use('/api', controller(database, router));
};

export default setupAppContext;
