import filterWhere from './filterWhere';

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
        IF(COUNT(\`s1_household_profile/head_of_household/female_hhd\`) > 0, 's1_household_profile/head_of_household/female_hhd', NULL) AS \`Head of Household\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'almost_nothing', 1, 0)) AS \`almost_nothing' \`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'less_than_half', 1, 0)) AS \`less_than_half'\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'more_than_half', 1, 0)) AS \`more_than_half\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'almost_all', 1, 0)) AS \`almost_all'\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = '', 1, 0)) AS \`N/A\`
    FROM
        pdm
    WHERE
        \`s1_household_profile/head_of_household/female_hhd\` = 'TRUE' AND
        :where
    UNION SELECT
        IF(COUNT(\`s1_household_profile/head_of_household/child_hhd\`) > 0, 's1_household_profile/head_of_household/child_hhd', NULL) AS \`Head of Household \`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'almost_nothing', 1, 0)) AS \`almost_nothing' \`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'less_than_half', 1, 0)) AS \`less_than_half'\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'more_than_half', 1, 0)) AS \`more_than_half\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'almost_all', 1, 0)) AS \`almost_all'\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = '', 1, 0)) AS \`N/A\`
    FROM
        pdm
    WHERE
        \`s1_household_profile/head_of_household/child_hhd\` = 'TRUE' AND
        :where
    UNION SELECT
        IF(COUNT(\`s1_household_profile/head_of_household/elderly_hhd\`) > 0, 's1_household_profile/head_of_household/elderly_hhd', NULL) AS \`Head of Household for Blankets \`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'almost_nothing', 1, 0)) AS \`almost_nothing' \`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'less_than_half', 1, 0)) AS \`less_than_half'\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'more_than_half', 1, 0)) AS \`more_than_half\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'almost_all', 1, 0)) AS \`almost_all'\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = '', 1, 0)) AS \`N/A\`
    FROM
        pdm
    WHERE
        \`s1_household_profile/head_of_household/elderly_hhd\` = 'TRUE' AND
        :where
    UNION SELECT
        IF(COUNT(\`s1_household_profile/head_of_household/chronically_ill\`) > 0, 's1_household_profile/head_of_household/chronically_ill', NULL) AS \`Head of Household  for Blankets \`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'almost_nothing', 1, 0)) AS \`almost_nothing' \`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'less_than_half', 1, 0)) AS \`less_than_half'\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'more_than_half', 1, 0)) AS \`more_than_half\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'almost_all', 1, 0)) AS \`almost_all'\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = '', 1, 0)) AS \`N/A\`
    FROM
        pdm
    WHERE
        \`s1_household_profile/head_of_household/chronically_ill\` = 'TRUE' AND
        :where
    UNION SELECT
        IF(COUNT(\`s1_household_profile/head_of_household/hh_disability\`) > 0, 's1_household_profile/head_of_household/hh_disability', NULL) AS \`Head of Household  for Blankets \`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'almost_nothing', 1, 0)) AS \`almost_nothing' \`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'less_than_half', 1, 0)) AS \`less_than_half'\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'more_than_half', 1, 0)) AS \`more_than_half\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = 'almost_all', 1, 0)) AS \`almost_all'\`,
        SUM(IF(\`s3_use_of_cash_assistanceq3_5_9_transportation\` = '', 1, 0)) AS \`N/A\`
    FROM
        pdm
    WHERE
        \`s1_household_profile/head_of_household/hh_disability\` = 'TRUE' AND
        :where
    ;`,
    { where },
  );

  return results;
};
