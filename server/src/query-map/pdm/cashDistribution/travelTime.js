export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    SUM(IF(\`s2_cash_distribution_processq2_5_travel_more_than_1_hour\` = 'yes',
        1,
        0)) AS \`yes\`,
    SUM(IF(\`s2_cash_distribution_processq2_5_travel_more_than_1_hour\` = 'no',
        1,
        0))  AS \`no\`
FROM
    pdm;`);
  return results;
};
