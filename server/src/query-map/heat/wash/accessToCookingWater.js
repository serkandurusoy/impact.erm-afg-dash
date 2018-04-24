export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`general_infoq1_province\`,
    SUM(IF(\`S6_washq6_1_cooking_water\` = 'yes',
        1,
        0)) AS \`yes\`,
    SUM(IF(\`S6_washq6_1_cooking_water\` = 'no',
        1,
        0)) AS \`no\`
FROM
    heat
GROUP BY general_infoq1_province;`);
  return results;
};
