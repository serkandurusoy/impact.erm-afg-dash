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
        SUM(IF(\`S1_headOfHouseholdq4_4_nid_numb\` = 'yes', 1, 0)) \`yes\`,
        SUM(IF(\`S1_headOfHouseholdq4_4_nid_numb\` = 'no', 1, 0)) \`no\`
    FROM
        heat
    :where
    ;`,
    { where },
  );

  return results[0];
};
