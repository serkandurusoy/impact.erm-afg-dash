export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    AVG(\`s2_cash_distribution_processq2_3_how_mach_cash\`) AS \`avg_s2_cash_distribution_processq2_3_how_mach_cash\`,
    MIN(\`s2_cash_distribution_processq2_3_how_mach_cash\`) AS \`min_s2_cash_distribution_processq2_3_how_mach_cash\`,
    MAX(\`s2_cash_distribution_processq2_3_how_mach_cash\`) AS \`max_s2_cash_distribution_processq2_3_how_mach_cash\`
FROM
    pdm;`);
  return results;
};
