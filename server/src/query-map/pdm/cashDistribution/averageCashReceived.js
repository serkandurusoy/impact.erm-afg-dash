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
        AVG(\`s2_cash_distribution_processq2_3_how_mach_cash\`) AS \`avg_s2_cash_distribution_processq2_3_how_mach_cash\`,
        MIN(\`s2_cash_distribution_processq2_3_how_mach_cash\`) AS \`min_s2_cash_distribution_processq2_3_how_mach_cash\`,
        MAX(\`s2_cash_distribution_processq2_3_how_mach_cash\`) AS \`max_s2_cash_distribution_processq2_3_how_mach_cash\`
    FROM
        pdm
    :where
    ;`,
    { where },
  );

  const avgMinMax = results[0];

  const [count] = await database('pdm').count(
    's2_cash_distribution_processq2_3_how_mach_cash as cnt',
  );

  const [p25] = await database
    .select('s2_cash_distribution_processq2_3_how_mach_cash as p25')
    .from('pdm')
    .orderBy('s2_cash_distribution_processq2_3_how_mach_cash', 'asc')
    .limit(1)
    .offset(parseInt(count.cnt * 0.25, 10));

  const [p75] = await database
    .select('s2_cash_distribution_processq2_3_how_mach_cash as p75')
    .from('pdm')
    .orderBy('s2_cash_distribution_processq2_3_how_mach_cash', 'asc')
    .limit(1)
    .offset(parseInt(count.cnt * 0.75, 10));

  const result = avgMinMax && {
    ...avgMinMax,
    '25_s2_cash_distribution_processq2_3_how_mach_cash': p25.p25,
    '75_s2_cash_distribution_processq2_3_how_mach_cash': p75.p75,
  };

  return result;
};
