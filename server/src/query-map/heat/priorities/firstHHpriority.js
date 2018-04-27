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
        \`s8_prioritiesFirst\`,
        COUNT(\`s8_prioritiesFirst\`) as \`count\`
    FROM
        heat
    ?
    GROUP BY \`s8_prioritiesFirst\`
    ;`,
    [where],
  );

  return results;
};
