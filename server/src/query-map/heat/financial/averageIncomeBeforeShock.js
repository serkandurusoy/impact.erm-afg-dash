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

  const [results] = await database.raw(
    `
    SELECT
        AVG(\`S4_financial_ASSESSq4_3_income_before\`) as \`avg_S4_financial_ASSESSq4_3_income_before\`,
        MIN(\`S4_financial_ASSESSq4_3_income_before\`) as \`min_S4_financial_ASSESSq4_3_income_before\`,
        MAX(\`S4_financial_ASSESSq4_3_income_before\`) as \`max_S4_financial_ASSESSq4_3_income_before\`
    FROM
        heat
    :where
    ;`,
    { where },
  );

  const avgMinMax = results[0];

  // TODO: 25/75 percentile
  const result = avgMinMax && {
    ...avgMinMax,
    '25_S4_financial_ASSESSq4_3_income_before':
      (avgMinMax.min_S4_financial_ASSESSq4_3_income_before +
        avgMinMax.avg_S4_financial_ASSESSq4_3_income_before) /
      2,
    '75_S4_financial_ASSESSq4_3_income_before':
      (avgMinMax.max_S4_financial_ASSESSq4_3_income_before +
        avgMinMax.avg_S4_financial_ASSESSq4_3_income_before) /
      2,
  };

  return result;
};
