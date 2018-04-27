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
        AVG(\`S4_financial_ASSESSq4_4_income_after\`) as \`avg_S4_financial_ASSESSq4_4_income_after\`,
        MIN(\`S4_financial_ASSESSq4_4_income_after\`) as \`min_S4_financial_ASSESSq4_4_income_after\`,
        MAX(\`S4_financial_ASSESSq4_4_income_after\`) as \`max_S4_financial_ASSESSq4_4_income_after\`
    FROM
        heat
    ?
    ;`,
    [where],
  );

  return results[0];
};
