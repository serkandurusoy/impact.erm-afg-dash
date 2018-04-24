export default async (
  database,
  // eslint-disable-next-line no-unused-vars
  { provinces, districts, dateBegin, dateEnd },
) => {
  const [results] = await database.raw(`SELECT
    SUM(\`S1_headOfHouseholdnew_born_male\`) as \`S1_headOfHouseholdnew_born_male\`,
    SUM(\`S1_headOfHouseholdnew_born_female\`)  as \`S1_headOfHouseholdnew_born_female\`,
    SUM(\`S1_headOfHouseholdchildren_6_18_male\`) as \`S1_headOfHouseholdchildren_6_18_male\`,
    SUM(\`S1_headOfHouseholdchildren_6_18_female\`) as \`S1_headOfHouseholdchildren_6_18_female\`,
    SUM(\`S1_headOfHouseholdadult_19_59_male\`) as \`S1_headOfHouseholdadult_19_59_male\`,
    SUM(\`S1_headOfHouseholdadult_19_59_female\`) as \`S1_headOfHouseholdadult_19_59_female\`,
    SUM(\`S1_headOfHouseholdelders_60_abv_male\`) as \`S1_headOfHouseholdelders_60_abv_male\`,
    SUM(\`S1_headOfHouseholdelders_60_abv_female\`) as\`S1_headOfHouseholdelders_60_abv_female\`
FROM
    heat;`);
  return results;
};
