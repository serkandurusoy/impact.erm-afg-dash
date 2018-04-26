/*
	TODO != To be replaced with N/A
*/

export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    AVG(\`S7_SHELTERq7_4_if_rented_amount\`) as \`avg_S7_SHELTERq7_4_if_rented_amount\`,
    MIN(\`S7_SHELTERq7_4_if_rented_amount\`) as \`min_S7_SHELTERq7_4_if_rented_amount\`,
    MAX(\`S7_SHELTERq7_4_if_rented_amount\`) as \`max_S7_SHELTERq7_4_if_rented_amount\`
FROM
    heat
WHERE \`S7_SHELTERq7_4_if_rented_amount\` != '';`);
  return results[0];
};
