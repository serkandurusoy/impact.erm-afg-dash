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
        AVG(\`rCSI_newThreshold\`) AS \`avg_rCSI_newThreshold\`,
        SUM(IF(\`rCSI_newThreshold\` = 1, 1, 0)) AS \`1\`,
        SUM(IF(\`rCSI_newThreshold\` = 2, 1, 0)) AS \`2\`,
        SUM(IF(\`rCSI_newThreshold\` = 3, 1, 0)) AS \`3\`
    FROM
        heat
    :where
    GROUP BY
        \`general_infoq1_province\`
    ;`,
    { where },
  );

  return results;
};
