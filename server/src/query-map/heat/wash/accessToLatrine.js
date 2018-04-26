export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    SUM(IF(\`S6_washq6_5_latrine_available\` = 'yes',
        1,
        0)) \`yes\`,
    SUM(IF(\`S6_washq6_5_latrine_available\` = 'no',
        1,
        0)) \`no\`
FROM
    heat;`);
  return results[0];
};
