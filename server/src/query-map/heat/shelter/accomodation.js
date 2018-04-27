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
        \`S7_SHELTERq7_1_accomodation\`,
        SUM(IF(\`S7_SHELTERq7_2_acc_arrangement\` = 'Free_of_charge', 1, 0)) \`Free_of_charge\`,
        SUM(IF(\`S7_SHELTERq7_2_acc_arrangement\` = 'Hosted', 1, 0)) AS \`Hosted\`,
        SUM(IF(\`S7_SHELTERq7_2_acc_arrangement\` = 'Rented', 1, 0)) AS \`Rented\`,
        SUM(IF(\`S7_SHELTERq7_2_acc_arrangement\` = 'Owned', 1, 0)) \`Owned\`,
        SUM(IF(\`S7_SHELTERq7_2_acc_arrangement\` = 'Squatting', 1, 0)) AS \`Squatting\`
    FROM
        heat
    ?
    GROUP BY \`S7_SHELTERq7_1_accomodation\`
    ;`,
    [where],
  );

  return results;
};
