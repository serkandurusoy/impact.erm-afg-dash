const bootstrapCache = async database => {
  const version = process.env.IMPACT_VERSION || '0.0.0';

  const [result] = await database
    .select('value')
    .from('cache')
    .where({ hash: 'version' });

  const cachedVersion = result && result.value;

  if (!cachedVersion || cachedVersion !== version) {
    try {
      await database.del().from('cache');
      await database
        .insert({
          hash: 'version',
          value: version,
        })
        .into('cache');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error bootstrapping the cache', error);
    }
  }
};

export default bootstrapCache;
