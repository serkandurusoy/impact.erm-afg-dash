import objectHash from 'object-hash';

const cacheSet = async (database, queryObject, queryResult) => {
  const hash = objectHash(queryObject, { unorderedArrays: true });

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
