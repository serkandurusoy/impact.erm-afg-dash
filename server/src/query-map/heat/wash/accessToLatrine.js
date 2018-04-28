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
        SUM(IF(\`S6_washq6_5_latrine_available\` = 'yes', 1, 0)) \`yes\`,
        SUM(IF(\`S6_washq6_5_latrine_available\` = 'no', 1, 0)) \`no\`
    FROM
        heat
    :where
    ;`,
    { where },
  );

  return results[0];
};
