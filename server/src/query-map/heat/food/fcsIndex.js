export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`general_infoq1_province\`,
    AVG(\`rCSI_newThreshold\`) AS \`avg_rCSI_newThreshold\`,
    SUM(IF(\`rCSI_newThreshold\` = 1, 1, 0)) AS \`1\`,
    SUM(IF(\`rCSI_newThreshold\` = 2, 1, 0)) AS \`2\`,
    SUM(IF(\`rCSI_newThreshold\` = 3, 1, 0)) AS \`3\`
FROM
    heat
GROUP BY \`general_infoq1_province\`;`);
  return results;
};
