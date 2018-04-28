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
        \`S6_washq6_6_latrine_type\`,
        COUNT(\`S6_washq6_6_latrine_type\`) as \`count\`
    FROM
        heat
    :where
    GROUP BY
        \`S6_washq6_6_latrine_type\`
    ;`,
    { where },
  );

  return results;
};
