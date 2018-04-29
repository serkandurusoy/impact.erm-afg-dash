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

  return Promise.all(
    results.map(async province => {
      const [count] = await database('mpc')
        .count('s1_full_market_survey/q1_17_2_room_cost_max as cnt')
        .where({
          'general_info/q3_province': province['general_info/q3_province'],
        });

      const [p25] = await database
        .select('s1_full_market_survey/q1_17_2_room_cost_max as p25')
        .from('mpc')
        .where({
          'general_info/q3_province': province['general_info/q3_province'],
        })
        .orderBy('s1_full_market_survey/q1_17_2_room_cost_max', 'asc')
        .limit(1)
        .offset(parseInt(count.cnt * 0.25, 10));

      const [p75] = await database
        .select('s1_full_market_survey/q1_17_2_room_cost_max as p75')
        .from('mpc')
        .where({
          'general_info/q3_province': province['general_info/q3_province'],
        })
        .orderBy('s1_full_market_survey/q1_17_2_room_cost_max', 'asc')
        .limit(1)
        .offset(parseInt(count.cnt * 0.75, 10));

      return Object.entries({
        ...province,
        '25_s1_full_market_survey/q1_17_2_room_cost_max': p25.p25,
        '75_s1_full_market_survey/q1_17_2_room_cost_max': p75.p75,
      }).reduce(
        (obj, [k, v]) => ({
          ...obj,
          [k]: v === 'null' || v === null || !v ? 0 : v,
        }),
        {},
      );
    }),
  );
};
