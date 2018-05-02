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
        SUM(IF(\`s3_use_of_cash_assistanceq3_4_cash_improved_wellbeing_ur_hhd\` = 'no_it_created_problems', 1, 0)) \`no_it_created_problems\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_4_cash_improved_wellbeing_ur_hhd\` = 'yes_improved_a_little', 1, 0)) AS \`yes_improved_a_little\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_4_cash_improved_wellbeing_ur_hhd\` = 'no_it_did_not_make_a_difference', 1, 0)) AS \`no_it_did_not_make_a_difference\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_4_cash_improved_wellbeing_ur_hhd\` = 'yes_improved_a_lot', 1, 0)) AS \`yes_improved_a_lot\`
    FROM
        pdm
    :where
    ;`,
    { where },
  );

  return results;
};
