export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`s8_prioritiesthird\`,
    COUNT(\`s8_prioritiesthird\`) as \`count\`
FROM
    heat
GROUP BY \`s8_prioritiesthird\`;`);
  return results;
};
