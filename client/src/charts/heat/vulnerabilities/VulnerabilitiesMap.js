import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import chroma from 'chroma-js';
import ReactTooltip from 'react-tooltip';
import PROVINCE_INFO from '../../../constants/province-info';
import PROVINCE_GEO_DATA from '../../../constants/province-geo-data';

const colorScale = chroma.scale(['fbd9d9', 'ee4e4e']);

class Chart extends Component {
  static propTypes = {
    data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  }

  render() {
    const { data } = this.props;

    return (
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
              {(geographies, projection) =>
                geographies.map(geography => {
                  const provinceName = PROVINCE_INFO.find(
                    ({ id }) => id === geography.properties.ID_1,
                  ).name;
                  const province = data.find(
                    d => d.general_infoq1_province === provinceName,
                  );
                  const color =
                    province &&
                    colorScale(
                      province.total / data.reduce((t, v) => t + v.total, 0),
                    ).hex();
                  return (
                    <Geography
                      data-tip={`${geography.properties.NAME_1}${
                        province ? `: ${province.total}` : ''
                      }`}
                      data-for="vulnerabilitiesMap"
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
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip className="graph__tooltip" id="vulnerabilitiesMap" />
      </div>
    );
  }
}

export default Chart;
