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
        COUNT(\`S2_AdditionalVulnerabilityq2_1_elderly_hdd\`) AS \`total\`,
        SUM(IF(\`S2_AdditionalVulnerabilityq2_1_elderly_hdd\` = 'yes', 1, 0)) AS \`S2_AdditionalVulnerabilityq2_1_elderly_hdd\`
    FROM
        heat
    :where
    ;`,
    { where },
  );

  return results[0];
};
