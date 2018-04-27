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
        \`general_infoq5_organization\`,
        COUNT(\`S1_headOfHouseholdtotal_mem\`) as \`count\`,
        SUM(\`S1_headOfHouseholdtotal_mem\`) as \`sum\`
    FROM
        heat
    ?
    GROUP BY \`general_infoq5_organization\`
    ;`,
    [where],
  );

  return results;
};
