export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`s8_prioritiesFirst\`,
    COUNT(\`s8_prioritiesFirst\`) as \`count\`
FROM
    heat
GROUP BY \`s8_prioritiesFirst\`;`);
  return results;
};
