export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`general_infoq5_organization\`,
    COUNT(\`S1_headOfHouseholdtotal_mem\`) as \`count\`,
    SUM(\`S1_headOfHouseholdtotal_mem\`) as \`sum\`
FROM
    heat
GROUP BY \`general_infoq5_organization\`;`);
  return results;
};
