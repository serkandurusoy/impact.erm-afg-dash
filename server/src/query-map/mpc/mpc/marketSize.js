export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    SUM(IF(\`s1_full_market_survey/q1_3_market_size\` = 'large',
        1,
        0)) AS \`large\`,
    SUM(IF(\`s1_full_market_survey/q1_3_market_size\` = 'medium',
        1,
        0)) AS \`medium\`,
    SUM(IF(\`s1_full_market_survey/q1_3_market_size\` = 'small',
        1,
        0))  \`small\`
FROM
    mpc;`);
  return results;
};
