import objectHash from 'object-hash';
import lastUpdate from './_last-update';

const cacheSet = async (database, queryObject, queryResult) => {
  const lastUpdateObject = await lastUpdate(database);

  const hash = objectHash(
    { ...queryObject, ...lastUpdateObject },
    { unorderedArrays: true },
  );

  return database.raw(
    `
      insert into cache (hash, value)
      values (?, ?)
      on duplicate key
      update hash = hash
    `,
    [hash, JSON.stringify(queryResult)],
  );
};

export default cacheSet;
