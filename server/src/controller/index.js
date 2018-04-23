import requestValidator from './_request-validator';
import { callDb, lastUpdate } from '../service';

const controller = (database, router) => {
  router.use(requestValidator);

  router.get('/', (req, res) => {
    res.send({ status: 'ok', from: '/api' });
  });

  router.get('/lastUpdate', async (req, res) => {
    const data = await lastUpdate(database);
    res.send(data);
  });

  router.get('/db', async (req, res) => {
    const data = await callDb(database);
    res.send(data);
  });

  router.get('/:id', (req, res) => {
    res.send({
      status: 'ok',
      from: `/api/${req.params.id}`,
      params: req.params,
      query: req.query,
    });
  });

  return router;
};

export default controller;
