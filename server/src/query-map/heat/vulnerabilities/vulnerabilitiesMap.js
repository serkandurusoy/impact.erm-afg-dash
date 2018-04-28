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

  // TODO: Any way to calculate percentile easily?
  const [results] = await database.raw(
    `
    SELECT
        \`general_infoq1_province\`,
        SUM(IF(\`S2_AdditionalVulnerabilityq2_1_elderly_hdd\` = 'yes', 1, 0)) +
        SUM(IF(\`S2_AdditionalVulnerabilityq2_2_female_hdd\` = 'yes', 1, 0)) +
        SUM(IF(\`S2_AdditionalVulnerabilityq2_3_child_hdd\` = 'yes', 1, 0)) +
        SUM(IF(\`S2_AdditionalVulnerabilityq2_4_physical\` = 'yes', 1, 0)) +
        SUM(IF(\`S2_AdditionalVulnerabilityq2_5_chronically\` = 'yes', 1, 0)) AS \`total\`,
        SUM(IF(\`S2_AdditionalVulnerabilityq2_1_elderly_hdd\` = 'yes', 1, 0)) AS \`S2_AdditionalVulnerabilityq2_1_elderly_hdd\`,
        SUM(IF(\`S2_AdditionalVulnerabilityq2_2_female_hdd\` = 'yes', 1, 0)) AS \`S2_AdditionalVulnerabilityq2_2_female_hdd\`,
        SUM(IF(\`S2_AdditionalVulnerabilityq2_3_child_hdd\` = 'yes', 1, 0)) AS \`S2_AdditionalVulnerabilityq2_3_child_hdd\`,
        SUM(IF(\`S2_AdditionalVulnerabilityq2_4_physical\` = 'yes', 1, 0)) AS \`S2_AdditionalVulnerabilityq2_4_physical\`,
        SUM(IF(\`S2_AdditionalVulnerabilityq2_5_chronically\` = 'yes', 1, 0)) AS \`S2_AdditionalVulnerabilityq2_5_chronically\`
    FROM
        heat
    :where
    GROUP BY
        \`general_infoq1_province\`
    ;`,
    { where },
  );

  return results;
};
