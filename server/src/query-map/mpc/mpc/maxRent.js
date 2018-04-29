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
        MIN(\`s1_full_market_survey/q1_17_2_room_cost_max\`) AS \`min_s1_full_market_survey/q1_17_2_room_cost_max\`,
        MAX(\`s1_full_market_survey/q1_17_2_room_cost_max\`) AS \`max_s1_full_market_survey/q1_17_2_room_cost_max\`,
        AVG(\`s1_full_market_survey/q1_17_2_room_cost_max\`) AS \`avg_s1_full_market_survey/q1_17_2_room_cost_max\`
    FROM
        mpc
    :where
    GROUP BY
        \`general_info/q3_province\`
    ;`,
    { where },
  );

  // TODO: 25/75 percentile
  return results.map(province => ({
    ...province,
    '25_s1_full_market_survey/q1_17_2_room_cost_max':
      (province['min_s1_full_market_survey/q1_17_2_room_cost_max'] +
        province['avg_s1_full_market_survey/q1_17_2_room_cost_max']) /
      2,
    '75_s1_full_market_survey/q1_17_2_room_cost_max':
      (province['max_s1_full_market_survey/q1_17_2_room_cost_max'] +
        province['avg_s1_full_market_survey/q1_17_2_room_cost_max']) /
      2,
  }));
};
