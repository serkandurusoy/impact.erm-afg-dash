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
        COUNT(\`S1_headOfHouseholdtotal_mem\`) as \`count\`,
        SUM(\`S1_headOfHouseholdtotal_mem\`) as \`sum\`
    FROM
        heat
    ?
    GROUP BY \`general_infoq1_province\`
    ;`,
    [where],
  );

  return results;
};
