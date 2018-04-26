/*
	TODO: Percentile how to handle ?
*/

export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
	AVG(\`S4_financial_ASSESSq4_3_income_before\`) as \`avg_S4_financial_ASSESSq4_3_income_before\`,
    MIN(\`S4_financial_ASSESSq4_3_income_before\`) as \`min_S4_financial_ASSESSq4_3_income_before\`,
    MAX(\`S4_financial_ASSESSq4_3_income_before\`) as \`max_S4_financial_ASSESSq4_3_income_before\`
FROM
    heat;`);
  return results[0];
};
