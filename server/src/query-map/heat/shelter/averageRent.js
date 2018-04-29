import filterWhere from '../filterWhere';

export default async (
  database,
  { provinces, districts, dateBegin, dateEnd },
) => {
  const where = filterWhere(
    database,
    {
      provinces,
      districts,
      dateBegin,
      dateEnd,
    },
    // TODO: Count NULL's as N/A, how to represent in chart?
    `\`S7_SHELTERq7_4_if_rented_amount\` IS NOT NULL AND`,
  );

  const [results] = await database.raw(
    `
    SELECT
        AVG(\`S7_SHELTERq7_4_if_rented_amount\`) as \`avg_S7_SHELTERq7_4_if_rented_amount\`,
        MIN(\`S7_SHELTERq7_4_if_rented_amount\`) as \`min_S7_SHELTERq7_4_if_rented_amount\`,
        MAX(\`S7_SHELTERq7_4_if_rented_amount\`) as \`max_S7_SHELTERq7_4_if_rented_amount\`
    FROM
        heat
    :where
    ;`,
    { where },
  );

  const avgMinMax = results[0];

  const [count] = await database('heat').count(
    'S7_SHELTERq7_4_if_rented_amount as cnt',
  );

  const [p25] = await database
    .select('S7_SHELTERq7_4_if_rented_amount as p25')
    .from('heat')
    .orderBy('S7_SHELTERq7_4_if_rented_amount', 'asc')
    .limit(1)
    .offset(parseInt(count.cnt * 0.25, 10));

  const [p75] = await database
    .select('S7_SHELTERq7_4_if_rented_amount as p75')
    .from('heat')
    .orderBy('S7_SHELTERq7_4_if_rented_amount', 'asc')
    .limit(1)
    .offset(parseInt(count.cnt * 0.75, 10));

  const result = avgMinMax && {
    ...avgMinMax,
    '25_S7_SHELTERq7_4_if_rented_amount': p25.p25,
    '75_S7_SHELTERq7_4_if_rented_amount': p75.p75,
  };

  return result;
};
