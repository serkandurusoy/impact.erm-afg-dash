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
    `\`S7_SHELTERq7_4_if_rented_amount\` != '' AND`,
  );

  // TODO: "!=" should be replaced with N/A
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

  return results[0];
};
