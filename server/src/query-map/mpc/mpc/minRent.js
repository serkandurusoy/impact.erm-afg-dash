export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`general_info/q3_province\`,
    MIN(\`s1_full_market_survey/q1_17_1_room_cost_min\`) AS \`min_s1_full_market_survey/q1_17_1_room_cost_min\`,
    MAX(\`s1_full_market_survey/q1_17_1_room_cost_min\`) AS \`max_s1_full_market_survey/q1_17_1_room_cost_min\`,
    AVG(\`s1_full_market_survey/q1_17_1_room_cost_min\`) AS \`avg_s1_full_market_survey/q1_17_1_room_cost_min\`
FROM
    mpc
GROUP BY \`general_info/q3_province\`;`);
  return results;
};
