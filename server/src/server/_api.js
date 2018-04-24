import { query, lastUpdate } from '../service/index';

const api = (database, router) => {
  router.get('/', (req, res) => {
    res.send({ status: 'ok', from: '/api' });
  });

  router.get('/lastUpdate', async (req, res) => {
    const data = await lastUpdate(database);
    res.send(data);
  });

  router.get('/query/:title/:subTitle/:name', async (req, res) => {
    const { title, subTitle, name } = req.params;
    const { provinces, districts, dateBegin, dateEnd } = req.query;

    const data = await query(database, {
      title,
      subTitle,
      name,
      where: {
        provinces,
        districts,
        dateBegin,
        dateEnd,
      },
    });

    res.send(data);
  });

  return router;
};

export default api;
