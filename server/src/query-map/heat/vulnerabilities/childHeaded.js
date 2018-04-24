export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    COUNT(\`S2_AdditionalVulnerabilityq2_3_child_hdd\`) as \`total\`,
    SUM(IF(\`S2_AdditionalVulnerabilityq2_3_child_hdd\` = 'yes',
        1,
        0)) AS \`S2_AdditionalVulnerabilityq2_3_child_hdd\`
FROM
    heat;`);
  return results;
};
