export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    SUM(IF(\`S1_headOfHouseholdq4_4_nid_numb\` = 'yes',
        1,
        0)) \`yes\`,
    SUM(IF(\`S1_headOfHouseholdq4_4_nid_numb\` = 'no',
        1,
        0)) \`no\`
FROM
    heat;`);
  return results[0];
};
