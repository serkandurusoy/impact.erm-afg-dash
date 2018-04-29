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

  // TODO: 25/75 percentile
  const result = avgMinMax && {
    ...avgMinMax,
    '25_s2_cash_distribution_processq2_3_how_mach_cash':
      (avgMinMax.min_s2_cash_distribution_processq2_3_how_mach_cash +
        avgMinMax.avg_s2_cash_distribution_processq2_3_how_mach_cash) /
      2,
    '75_s2_cash_distribution_processq2_3_how_mach_cash':
      (avgMinMax.max_s2_cash_distribution_processq2_3_how_mach_cash +
        avgMinMax.avg_s2_cash_distribution_processq2_3_how_mach_cash) /
      2,
  };

  return result;
};
