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
        COUNT(\`S2_AdditionalVulnerabilityq2_4_physical\`) AS \`total\`,
        SUM(IF(\`S2_AdditionalVulnerabilityq2_4_physical\` = 'yes', 1, 0)) AS \`S2_AdditionalVulnerabilityq2_4_physical\`
    FROM
        heat
    ?
    ;`,
    [where],
  );

  return results[0];
};
