export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`s8_prioritiesSecond\`,
    COUNT(\`s8_prioritiesSecond\`) as \`count\`
FROM
    heat
GROUP BY \`s8_prioritiesSecond\`;`);
  return results;
};
