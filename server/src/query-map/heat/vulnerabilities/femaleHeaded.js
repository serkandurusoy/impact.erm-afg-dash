export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    COUNT(\`S2_AdditionalVulnerabilityq2_2_female_hdd\`) AS \`total\`,
    SUM(IF(\`S2_AdditionalVulnerabilityq2_2_female_hdd\` = 'yes',
        1,
        0)) AS \`S2_AdditionalVulnerabilityq2_2_female_hdd\`
FROM
    heat;`);
  return results;
};
