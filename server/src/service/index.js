export const callDb = async database => {
  // TODO: cache handler!
  const dbResult = await database.select('*').from('xxx');

  return dbResult;
};

export default callDb;
