export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    \`S4_financial_ASSESSq4_5_new_debts\`,
    COUNT(\`S4_financial_ASSESSq4_5_new_debts\`) AS \`count\`
FROM
    heat
GROUP BY \`S4_financial_ASSESSq4_5_new_debts\`;`);
  return results;
};
