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
        \`general_info/q3_province\`,
        AVG(\`s1_full_market_survey/q1_10_current_price_wheat_flour\`) AS \`s1_full_market_survey/q1_10_current_price_wheat_flour\`,
        AVG(\`s1_full_market_survey/q1_10_1_current_price_rice\`) AS \`s1_full_market_survey/q1_10_1_current_price_rice\`,
        AVG(\`s1_full_market_survey/q1_10_2_current_price_oil\`) AS \`s1_full_market_survey/q1_10_2_current_price_oil\`,
        AVG(\`s1_full_market_survey/q1_10_3_current_price_diesel\`) AS \`s1_full_market_survey/q1_10_3_current_price_diesel\`
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
