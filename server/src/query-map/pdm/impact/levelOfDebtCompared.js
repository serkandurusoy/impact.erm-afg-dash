export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    SUM(IF(\`s5_multi_sector_outcome_indexq5_4_debt_compared\` = 'less',
        1,
        0)) AS \`less\`,
    SUM(IF(\`s5_multi_sector_outcome_indexq5_4_debt_compared\` = 'more',
        1,
        0)) AS \`more\`,
    SUM(IF(\`s5_multi_sector_outcome_indexq5_4_debt_compared\` = 'same',
        1,
        0)) AS \`same\`
FROM
    pdm;`);
  return results;
};