export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`S6_washq6_6_latrine_type\`,
    COUNT(\`S6_washq6_6_latrine_type\`) as \`count\`
    FROM
    heat
    GROUP BY \`S6_washq6_6_latrine_type\`;`);
  return results;
};
