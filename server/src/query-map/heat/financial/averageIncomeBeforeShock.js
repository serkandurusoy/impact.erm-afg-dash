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

  // TODO: Percentile how to handle ?
  const [results] = await database.raw(
    `
    SELECT
        AVG(\`S4_financial_ASSESSq4_3_income_before\`) as \`avg_S4_financial_ASSESSq4_3_income_before\`,
        MIN(\`S4_financial_ASSESSq4_3_income_before\`) as \`min_S4_financial_ASSESSq4_3_income_before\`,
        MAX(\`S4_financial_ASSESSq4_3_income_before\`) as \`max_S4_financial_ASSESSq4_3_income_before\`
    FROM
        heat
    ?
    ;`,
    [where],
  );

  return results[0];
};
