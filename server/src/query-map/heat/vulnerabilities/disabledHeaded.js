export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    COUNT(\`S2_AdditionalVulnerabilityq2_4_physical\`) AS \`total\`,
    SUM(IF(\`S2_AdditionalVulnerabilityq2_4_physical\` = 'yes',
        1,
        0)) AS \`S2_AdditionalVulnerabilityq2_4_physical\`
FROM
    heat;`);
  return results[0];
};
