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
        \`s8_prioritiesSecond\`,
        COUNT(\`s8_prioritiesSecond\`) as \`count\`
    FROM
        heat
    :where
    GROUP BY
        \`s8_prioritiesSecond\`
    ;`,
    { where },
  );

  return results;
};
