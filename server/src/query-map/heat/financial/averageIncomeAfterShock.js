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

  const [count] = await database('heat')
    .count('S4_financial_ASSESSq4_4_income_after as cnt')
    .whereRaw(where.toString().replace('WHERE', ''));

  const [p25] = await database
    .select('S4_financial_ASSESSq4_4_income_after as p25')
    .from('heat')
    .whereRaw(where.toString().replace('WHERE', ''))
    .orderBy('S4_financial_ASSESSq4_4_income_after', 'asc')
    .limit(1)
    .offset(parseInt(count.cnt * 0.25, 10));

  const [p75] = await database
    .select('S4_financial_ASSESSq4_4_income_after as p75')
    .from('heat')
    .whereRaw(where.toString().replace('WHERE', ''))
    .orderBy('S4_financial_ASSESSq4_4_income_after', 'asc')
    .limit(1)
    .offset(parseInt(count.cnt * 0.75, 10));

  return (
    avgMinMax &&
    Object.entries({
      ...avgMinMax,
      '25_S4_financial_ASSESSq4_4_income_after': p25 && p25.p25,
      '75_S4_financial_ASSESSq4_4_income_after': p75 && p75.p75,
    }).reduce(
      (obj, [k, v]) => ({
        ...obj,
        [k]:
          typeof v === 'undefined' || v === 'null' || v === null || !v ? 0 : v,
      }),
      {},
    )
  );
};
