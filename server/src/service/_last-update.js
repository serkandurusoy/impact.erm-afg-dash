const lastUpdate = async (/* database */) => {
  // TODO: last update date across tables!

  // const dbResult = await database.select('*').from('xxx');

  const dbResult = { lastUpdate: new Date('2019-04-23T19:45:39.329Z') };

  return dbResult;
};

export default lastUpdate;
