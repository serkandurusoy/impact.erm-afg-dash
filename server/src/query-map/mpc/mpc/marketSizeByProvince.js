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
        \`general_info/q3_province\` AS Province,
        SUM(IF(\`s1_full_market_survey/q1_3_market_size\` = 'large', 1, 0)) AS \`large\`,
        SUM(IF(\`s1_full_market_survey/q1_3_market_size\` = 'medium', 1, 0)) AS \`medium\`,
        SUM(IF(\`s1_full_market_survey/q1_3_market_size\` = 'small', 1, 0))  AS \`small\`
    FROM
        mpc
    :where
    GROUP BY
        \`general_info/q3_province\`
    ;`,
    { where },
  );

  return results;
};
