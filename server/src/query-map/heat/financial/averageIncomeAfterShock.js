/*
	TODO: Percentile how to handle ?
*/

export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
	AVG(\`S4_financial_ASSESSq4_4_income_after\`) as \`avg_S4_financial_ASSESSq4_4_income_after\`,
    MIN(\`S4_financial_ASSESSq4_4_income_after\`) as \`min_S4_financial_ASSESSq4_4_income_after\`,
    MAX(\`S4_financial_ASSESSq4_4_income_after\`) as \`max_S4_financial_ASSESSq4_4_income_after\`
FROM
    heat;`);
  return results[0];
};
