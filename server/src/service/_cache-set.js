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
      values (:hash, :value)
      on duplicate key
      update hash = hash
    `,
    {
      hash,
      value: JSON.stringify(queryResult),
    },
  );
};

export default cacheSet;
