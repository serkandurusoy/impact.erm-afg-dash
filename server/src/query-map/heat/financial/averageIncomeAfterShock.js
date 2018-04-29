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
        AVG(\`S4_financial_ASSESSq4_4_income_after\`) as \`avg_S4_financial_ASSESSq4_4_income_after\`,
        MIN(\`S4_financial_ASSESSq4_4_income_after\`) as \`min_S4_financial_ASSESSq4_4_income_after\`,
        MAX(\`S4_financial_ASSESSq4_4_income_after\`) as \`max_S4_financial_ASSESSq4_4_income_after\`
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
    '25_S4_financial_ASSESSq4_4_income_after':
      (avgMinMax.min_S4_financial_ASSESSq4_4_income_after +
        avgMinMax.avg_S4_financial_ASSESSq4_4_income_after) /
      2,
    '75_S4_financial_ASSESSq4_4_income_after':
      (avgMinMax.max_S4_financial_ASSESSq4_4_income_after +
        avgMinMax.avg_S4_financial_ASSESSq4_4_income_after) /
      2,
  };

  return result;
};
