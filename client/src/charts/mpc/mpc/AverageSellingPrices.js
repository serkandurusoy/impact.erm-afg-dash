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
  's1_full_market_survey/q1_10_current_price_wheat_flour': chroma.scale([
    `${chroma('#f69e61')
      .brighten(3)
      .hex()}`,
    `${chroma('#f69e61')
      .darken(2)
      .hex()}`,
  ]),
  's1_full_market_survey/q1_10_1_current_price_rice': chroma.scale([
    `${chroma('#95a0a9')
      .brighten(3)
      .hex()}`,
    `${chroma('#95a0a9')
      .darken(2)
      .hex()}`,
  ]),
  's1_full_market_survey/q1_10_2_current_price_oil': chroma.scale([
    `${chroma('#0067a9')
      .brighten(3)
      .hex()}`,
    `${chroma('#0067a9')
      .darken(2)
      .hex()}`,
  ]),
  's1_full_market_survey/q1_10_3_current_price_diesel': chroma.scale([
    `${chroma('#ee4e4e')
      .brighten(3)
      .hex()}`,
    `${chroma('#ee4e4e')
      .darken(2)
      .hex()}`,
  ]),
};

class Chart extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  };

  state = {
    selected: 's1_full_market_survey/q1_10_current_price_wheat_flour',
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
          <option value="s1_full_market_survey/q1_10_current_price_wheat_flour">
            Wheat Flour
          </option>
          <option value="s1_full_market_survey/q1_10_1_current_price_rice">
            Rice
          </option>
          <option value="s1_full_market_survey/q1_10_2_current_price_oil">
            Oil
          </option>
          <option value="s1_full_market_survey/q1_10_3_current_price_diesel">
            Diesel
          </option>
        </select>
        <ComposableMap width={600} height={500}>
          <ZoomableGroup zoom={18} center={[67, 34]} disablePanning>
            <Geographies geography={PROVINCE_GEO_DATA} disableOptimization>
              {(geographies, projection) => {
                const maxAvg = Math.max(...data.map(d => d[selected]));
                return geographies.map(geography => {
                  const provinceName = PROVINCE_INFO.find(
                    ({ id }) => id === geography.properties.ID_1,
                  ).name;
                  const province = data.find(
                    d => d['general_info/q3_province'] === provinceName,
                  );
                  const color =
                    province &&
                    province[selected] &&
                    colorScale[selected](province[selected] / maxAvg).hex();
                  const tooltip = `${geography.properties.NAME_1}${
                    province ? `: ${province[selected].toFixed(2)} AFN` : ''
                  }`;
                  return (
                    <Geography
                      data-for={selected}
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
                });
              }}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip className="graph__tooltip" id={selected} />
      </div>
    );
  }
}

export default Chart;
