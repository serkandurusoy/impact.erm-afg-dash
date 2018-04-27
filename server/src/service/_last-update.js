const lastUpdate = async database => {
  const { NO_CACHE } = process.env;

  const noCache = NO_CACHE === 'true';

  if (noCache) {
    try {
      await database.del().from('cache');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error clearing the cache', error);
    }
  }

  const [results] = await database.raw(`
    select max(lastUpdateOnTable) as lastUpdate from 
      (
        select max(today) as lastUpdateOnTable FROM mpc
        union
        select max(today) as lastUpdateOnTable FROM heat
        union
        select max(today) as lastUpdateOnTable FROM pdm
      ) as tables
    `);

  return {
    noCache,
    ...results[0],
    version: noCache ? Math.random().toString() : process.env.IMPACT_VERSION,
  };
};

export default lastUpdate;
