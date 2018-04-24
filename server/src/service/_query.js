import { cacheGet, cacheSet } from './';
import * as queryMap from '../query-map';

const query = async (database, queryObject) => {
  const cachedValue = await cacheGet(database, queryObject);

  if (cachedValue) return cachedValue;

  const {
    title,
    subTitle,
    name,
    where: { provinces, districts, dateBegin, dateEnd },
  } = queryObject;

  const queryFunction =
    queryMap[title] &&
    queryMap[title][subTitle] &&
    queryMap[title][subTitle][name];

  if (!queryFunction)
    throw new Error('Requested query is not defined on the api');

  const queryResult = await queryFunction(database, {
    provinces,
    districts,
    dateBegin,
    dateEnd,
  });

  await cacheSet(database, queryObject, queryResult);

  return queryResult;
};

export default query;
