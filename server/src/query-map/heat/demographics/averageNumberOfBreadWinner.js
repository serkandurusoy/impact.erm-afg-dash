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
    `SELECT
         \`general_infoq1_province\`,
         AVG(\`S4_financial_ASSESSmale_breadwinner\`) as \`S4_financial_ASSESSmale_breadwinner\`,
         AVG(\`S4_financial_ASSESSfemale_breadwinner\`) as \`S4_financial_ASSESSfemale_breadwinner\`
     FROM
         heat
     ?
     GROUP BY general_infoq1_province
     ;`,
    [where],
  );

  return results;
};
