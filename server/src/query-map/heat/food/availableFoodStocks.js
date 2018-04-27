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
        \`S5_FOOD_ASSESSq5_5_food_stocks\`,
        COUNT( \`S5_FOOD_ASSESSq5_5_food_stocks\`) as \`count\`
    FROM
        heat
    :where
    GROUP BY
        \`S5_FOOD_ASSESSq5_5_food_stocks\`
    ;`,
    { where },
  );

  return results;
};
