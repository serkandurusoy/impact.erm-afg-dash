import classNames from 'classnames';
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

const colorScale = chroma.scale(['ffffff', 'ee4e4e']);

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

  toggleSelected = (e, selected) => {
    e.preventDefault();
    this.setState({
      selected,
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
        }}
      >
        <div className="chartLayerSelector">
          <a
            className={classNames({
              active:
                selected ===
                's1_full_market_survey/q1_10_current_price_wheat_flour',
            })}
            href=""
            onClick={e =>
              this.toggleSelected(
                e,
                's1_full_market_survey/q1_10_current_price_wheat_flour',
              )
            }
          >
            Wheat Flour
          </a>
          <a
            className={classNames({
              active:
                selected === 's1_full_market_survey/q1_10_1_current_price_rice',
            })}
            href=""
            onClick={e =>
              this.toggleSelected(
                e,
                's1_full_market_survey/q1_10_1_current_price_rice',
              )
            }
          >
            Rice
          </a>
          <a
            className={classNames({
              active:
                selected === 's1_full_market_survey/q1_10_2_current_price_oil',
            })}
            href=""
            onClick={e =>
              this.toggleSelected(
                e,
                's1_full_market_survey/q1_10_2_current_price_oil',
              )
            }
          >
            Oil
          </a>
          <a
            className={classNames({
              active:
                selected ===
                's1_full_market_survey/q1_10_3_current_price_diesel',
            })}
            href=""
            onClick={e =>
              this.toggleSelected(
                e,
                's1_full_market_survey/q1_10_3_current_price_diesel',
              )
            }
          >
            Diesel
          </a>
        </div>
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
                    colorScale(province[selected] / maxAvg).hex();
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
