import bodyParser from 'body-parser';
import api from './_api';

const setupAppContext = (app, database, router) => {
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

  app.use('/api', api(database, router));
};

export default setupAppContext;
