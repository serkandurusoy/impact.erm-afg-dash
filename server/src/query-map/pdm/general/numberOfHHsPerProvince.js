export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`general_infoq1_province\`, COUNT(*) AS \`count\`
    FROM
    pdm
    GROUP BY \`general_infoq1_province\`;`);
  return results;
};
