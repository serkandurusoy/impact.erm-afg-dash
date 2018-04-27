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
    ?
    ;`,
    [where],
  );

  return results;
};
