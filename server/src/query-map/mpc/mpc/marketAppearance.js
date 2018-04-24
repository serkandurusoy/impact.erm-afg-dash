export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`general_info/q3_province\` AS Province,
    SUM(IF(\`s1_full_market_survey/q1_4_market_appearance\` = 'well_function_busy',
        1,
        0)) \`well_function_busy\`,
    SUM(IF(\`s1_full_market_survey/q1_4_market_appearance\` = 'moderate_function',
        1,
        0)) \`moderate_function\`
FROM
    mpc
GROUP BY \`general_info/q3_province\` ASC;`);
  return results;
};
