export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
	\`general_infoq1_province\`,
    AVG(\`S4_financial_ASSESSmale_breadwinner\`) as \`S4_financial_ASSESSmale_breadwinner\`,
    AVG(\`S4_financial_ASSESSfemale_breadwinner\`) as \`S4_financial_ASSESSfemale_breadwinner\`
FROM
    heat
GROUP BY general_infoq1_province;`);
  return results;
};
