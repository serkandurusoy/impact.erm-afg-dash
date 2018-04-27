import filterWhere from '../filterWhere';

export default async (
  database,
  { provinces, districts, dateBegin, dateEnd },
) => {
  const where = filterWhere(database, {
    provinces,
    districts,
    dateBegin,
    dateEnd,
  });

  const [results] = await database.raw(
    `
    SELECT
        \`s8_prioritiesthird\`,
        COUNT(\`s8_prioritiesthird\`) as \`count\`
    FROM
        heat
    ?
    GROUP BY \`s8_prioritiesthird\`
    ;`,
    [where],
  );

  return results;
};
