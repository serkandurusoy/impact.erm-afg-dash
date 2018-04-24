import objectHash from 'object-hash';

const cacheGet = async (database, queryObject) => {
  const hash = objectHash(queryObject, { unorderedArrays: true });

  const [result] = await database
    .select('value')
    .from('cache')
    .where({ hash });

  return result && result.value && JSON.parse(result.value);
};

export default cacheGet;
