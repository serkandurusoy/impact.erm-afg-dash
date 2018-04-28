import PROVINCE_INFO from '../../constants/province-info';

export default (
  database,
  { provinces, districts, dateBegin, dateEnd },
  firstWhere = [''],
) =>
  database.raw(
    `
      WHERE
        :firstWhere
        \`general_infoq1_province\` :provinceCondition (:provinces) AND
        \`general_infoq2_district\` :districtCondition (:districts) AND
        \`today\` between :dateBegin and :dateEnd
    `,
    {
      firstWhere: database.raw(firstWhere),
      provinceCondition: provinces
        ? database.raw('in')
        : database.raw('not in'),
      provinces: provinces
        ? provinces.map(
            p => PROVINCE_INFO.find(({ id }) => id === parseInt(p, 10)).name,
          )
        : [''],
      districtCondition: districts
        ? database.raw('in')
        : database.raw('not in'),
      districts: districts || [''],
      dateBegin: new Date(dateBegin),
      dateEnd: new Date(dateEnd),
    },
  );
