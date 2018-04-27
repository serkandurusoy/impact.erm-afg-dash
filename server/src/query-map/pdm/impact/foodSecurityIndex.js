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
        AVG(\`FCS\`) AS \`avg_FCS\`,
        SUM(IF(\`FCS_Level\` = 1, 1, 0)) AS \`1\`,
        SUM(IF(\`FCS_Level\` = 2, 1, 0)) AS \`2\`,
        SUM(IF(\`FCS_Level\` = 3, 1, 0)) AS \`3\`
    FROM
        pdm
    ?
    GROUP BY \`general_infoq1_province\`
    ;`,
    [where],
  );

  return results;
};
