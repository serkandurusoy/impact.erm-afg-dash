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
        MIN(\`s1_full_market_survey/q1_17_1_room_cost_min\`) AS \`min_s1_full_market_survey/q1_17_1_room_cost_min\`,
        MAX(\`s1_full_market_survey/q1_17_1_room_cost_min\`) AS \`max_s1_full_market_survey/q1_17_1_room_cost_min\`,
        AVG(\`s1_full_market_survey/q1_17_1_room_cost_min\`) AS \`avg_s1_full_market_survey/q1_17_1_room_cost_min\`
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
    '25_s1_full_market_survey/q1_17_1_room_cost_min':
      (province['min_s1_full_market_survey/q1_17_1_room_cost_min'] +
        province['avg_s1_full_market_survey/q1_17_1_room_cost_min']) /
      2,
    '75_s1_full_market_survey/q1_17_1_room_cost_min':
      (province['max_s1_full_market_survey/q1_17_1_room_cost_min'] +
        province['avg_s1_full_market_survey/q1_17_1_room_cost_min']) /
      2,
  }));
};
