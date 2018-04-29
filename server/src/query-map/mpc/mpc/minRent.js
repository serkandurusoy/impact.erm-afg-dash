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

  return Promise.all(
    results.map(async province => {
      const [count] = await database('mpc')
        .count('s1_full_market_survey/q1_17_1_room_cost_min as cnt')
        .whereRaw(`${where.toString().replace('WHERE', '')} AND :query`, {
          query: database.raw(`\`general_info/q3_province\` = :province`, {
            province: province['general_info/q3_province'],
          }),
        });

      const [p25] = await database
        .select('s1_full_market_survey/q1_17_1_room_cost_min as p25')
        .from('mpc')
        .whereRaw(`${where.toString().replace('WHERE', '')} AND :query`, {
          query: database.raw(`\`general_info/q3_province\` = :province`, {
            province: province['general_info/q3_province'],
          }),
        })
        .orderBy('s1_full_market_survey/q1_17_1_room_cost_min', 'asc')
        .limit(1)
        .offset(parseInt(count.cnt * 0.25, 10));

      const [p75] = await database
        .select('s1_full_market_survey/q1_17_1_room_cost_min as p75')
        .from('mpc')
        .whereRaw(`${where.toString().replace('WHERE', '')} AND :query`, {
          query: database.raw(`\`general_info/q3_province\` = :province`, {
            province: province['general_info/q3_province'],
          }),
        })
        .orderBy('s1_full_market_survey/q1_17_1_room_cost_min', 'asc')
        .limit(1)
        .offset(parseInt(count.cnt * 0.75, 10));

      return Object.entries({
        ...province,
        '25_s1_full_market_survey/q1_17_1_room_cost_min': p25 && p25.p25,
        '75_s1_full_market_survey/q1_17_1_room_cost_min': p75 && p75.p75,
      }).reduce(
        (obj, [k, v]) => ({
          ...obj,
          [k]:
            typeof v === 'undefined' || v === 'null' || v === null || !v
              ? 0
              : v,
        }),
        {},
      );
    }),
  );
};
