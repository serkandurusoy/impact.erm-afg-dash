import React from 'react';
import PropTypes from 'prop-types';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import chroma from 'chroma-js';
import PROVINCE_INFO from '../../../constants/province-info';
import PROVINCE_GEO_DATA from '../../../constants/province-geo-data';

const colorScale = chroma.scale(['ffffff', 'ee4e4e']);

const Chart = ({ data }) => (
  <div
    style={{
      width: '100%',
      maxWidth: 980,
      margin: '0 auto',
    }}
  >
    <ComposableMap width={600} height={500}>
      <ZoomableGroup zoom={18} center={[67, 34]} disablePanning>
        <Geographies geography={PROVINCE_GEO_DATA}>
          {(geographies, projection) => {
            const maxAvg = Math.max(
              ...data.map(
                d => d['s1_full_market_survey/q1_10_current_price_wheat_flour'],
              ),
            );
            return geographies.map(geography => {
              const provinceName = PROVINCE_INFO.find(
                ({ id }) => id === geography.properties.ID_1,
              ).name;
              const province = data.find(
                d => d['general_info/q3_province'] === provinceName,
              );
              const color =
                province &&
                province[
                  's1_full_market_survey/q1_10_current_price_wheat_flour'
                ] &&
                colorScale(
                  province[
                    's1_full_market_survey/q1_10_current_price_wheat_flour'
                  ] / maxAvg,
                ).hex();
              return (
                <Geography
                  key={geography.properties.ID_1}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      fill: color || '#ffffff',
                      stroke: '#607D8B',
                      strokeWidth: 0.01,
                      outline: 'none',
                    },
                    hover: {
                      fill: '#607D8B',
                      stroke: '#607D8B',
                      strokeWidth: 0.01,
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#607D8B',
                      stroke: '#607D8B',
                      strokeWidth: 0.01,
                      outline: 'none',
                    },
                  }}
                />
              );
            });
          }}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  </div>
);

Chart.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Chart;
