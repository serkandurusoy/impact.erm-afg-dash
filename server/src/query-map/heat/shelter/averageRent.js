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

  // TODO: 25/75 percentile
  const result = avgMinMax && {
    ...avgMinMax,
    '25_S7_SHELTERq7_4_if_rented_amount':
      (avgMinMax.min_S7_SHELTERq7_4_if_rented_amount +
        avgMinMax.avg_S7_SHELTERq7_4_if_rented_amount) /
      2,
    '75_S7_SHELTERq7_4_if_rented_amount':
      (avgMinMax.max_S7_SHELTERq7_4_if_rented_amount +
        avgMinMax.avg_S7_SHELTERq7_4_if_rented_amount) /
      2,
  };

  return result;
};
