import objectHash from 'object-hash';
import lastUpdate from './_last-update';

const cacheGet = async (database, queryObject) => {
  const lastUpdateObject = await lastUpdate(database);

  if (lastUpdateObject.noCache) return false;

  const hash = objectHash(
    { ...queryObject, ...lastUpdateObject },
    { unorderedArrays: true },
  );

  const [result] = await database
    .select('value')
    .from('cache')
    .where({ hash });

  return result && result.value && JSON.parse(result.value);
};

export default cacheGet;
