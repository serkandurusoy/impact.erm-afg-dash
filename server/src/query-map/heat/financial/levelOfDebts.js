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
        \`S4_financial_ASSESSq4_5_new_debts\`,
        COUNT(\`S4_financial_ASSESSq4_5_new_debts\`) AS \`count\`
    FROM
        heat
    ?
    GROUP BY \`S4_financial_ASSESSq4_5_new_debts\`
    ;`,
    [where],
  );

  return results;
};
