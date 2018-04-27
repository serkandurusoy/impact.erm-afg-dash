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
    `
    SELECT
        \`general_infoq1_province\`,
        SUM(IF(\`S6_washq6_1_bathing_water\` = 'yes', 1, 0)) AS \`yes\`,
        SUM(IF(\`S6_washq6_1_bathing_water\` = 'no', 1, 0)) AS \`no\`
    FROM
        heat
    ?
    GROUP BY general_infoq1_province
    ;`,
    [where],
  );

  return results;
};
