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

const colorScale = {
  avg_FCS: chroma.scale([
    '#fff67a',
    `${chroma('#fff67a')
      .darken(3)
      .hex()}`,
    `${chroma('#fff67a')
      .darken(5)
      .hex()}`,
  ]),
  '1': chroma.scale([
    `${chroma('#f69e61')
      .brighten(3)
      .hex()}`,
    `${chroma('#f69e61')
      .darken(2)
      .hex()}`,
  ]),
  '2': chroma.scale([
    `${chroma('#56b3cd')
      .brighten(1.5)
      .hex()}`,
    '#56b3cd',
    `${chroma('#56b3cd')
      .darken(3)
      .hex()}`,
    `${chroma('#56b3cd')
      .darken(5)
      .hex()}`,
  ]),
  '3': chroma.scale([
    `${chroma('#a5c9a1')
      .brighten(1.5)
      .hex()}`,
    '#a5c9a1',
    `${chroma('#a5c9a1')
      .darken(1)
      .hex()}`,
    `${chroma('#a5c9a1')
      .darken(3)
      .hex()}`,
    `${chroma('#a5c9a1')
      .darken(4)
      .hex()}`,
  ]),
};

class Chart extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  };

  state = {
    selected: 'avg_FCS',
  };

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  }

  toggleSelected = e => {
    this.setState({
      selected: e.target.value,
    });
  };

  render() {
    const { selected } = this.state;
    const { data } = this.props;

    return (
      <div
        style={{
          width: '100%',
          maxWidth: 980,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <select
          className="graph__filter"
          value={this.state.selected}
          onChange={this.toggleSelected}
        >
          <option value="avg_FCS">Average</option>
          <option value="1">Poor</option>
          <option value="2">Borderline</option>
          <option value="3">Acceptable</option>
        </select>
        <ComposableMap width={600} height={500}>
          <ZoomableGroup zoom={18} center={[67, 34]} disablePanning>
            <Geographies geography={PROVINCE_GEO_DATA} disableOptimization>
              {(geographies, projection) =>
                geographies.map(geography => {
                  const maxValue = Math.max(...data.map(d => d[selected]));
                  const provinceName = PROVINCE_INFO.find(
                    ({ id }) => id === geography.properties.ID_1,
                  ).name;
                  const province = data.find(
                    d => d.general_infoq1_province === provinceName,
                  );
                  const color =
                    province &&
                    colorScale[selected](province[selected] / maxValue).hex();
                  const totalFCSlevelCount =
                    province && province[1] + province[2] + province[3];
                  const tooltip = `${geography.properties.NAME_1}${
                    province
                      ? `: ${province[selected].toFixed(2)} ${
                          selected !== 'avg_FCS'
                            ? ` (${(
                                (province[selected] / totalFCSlevelCount) *
                                100
                              ).toFixed(2)}%)`
                            : ''
                        }`
                      : ''
                  }`;

                  return (
                    <Geography
                      data-for={`foodSecurityIndex-${selected}`}
                      data-tip={tooltip}
                      cacheId={tooltip}
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
        <ReactTooltip
          className="graph__tooltip"
          id={`foodSecurityIndex-${selected}`}
        />
      </div>
    );
  }
}

export default Chart;
