export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`general_infoq1_province\`,
    COUNT(\`S1_headOfHouseholdtotal_mem\`) as \`count\`,
    SUM(\`S1_headOfHouseholdtotal_mem\`) as \`sum\`
FROM
    heat
GROUP BY \`general_infoq1_province\`;`);
  return results;
};
