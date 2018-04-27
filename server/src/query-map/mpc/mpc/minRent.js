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
    ?
    GROUP BY \`general_info/q3_province\`
    ;`,
    [where],
  );

  return results;
};
