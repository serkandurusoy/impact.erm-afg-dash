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
        SUM(IF(\`s5_multi_sector_outcome_indexq5_4_debt_compared\` = 'less', 1, 0)) AS \`less\`,
        SUM(IF(\`s5_multi_sector_outcome_indexq5_4_debt_compared\` = 'more', 1, 0)) AS \`more\`,
        SUM(IF(\`s5_multi_sector_outcome_indexq5_4_debt_compared\` = 'same', 1, 0)) AS \`same\`
    FROM
        pdm
    :where
    ;`,
    { where },
  );

  return results;
};
