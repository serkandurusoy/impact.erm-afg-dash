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

const colorScale = chroma.scale([
  `${chroma('#fff67a')
    .brighten(1.5)
    .hex()}`,
  `${chroma('#fff67a')
    .darken(2)
    .hex()}`,
]);

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
              active: selected === 'avg_FCS',
            })}
            href=""
            onClick={e => this.toggleSelected(e, 'avg_FCS')}
          >
            Average
          </a>
          <a
            className={classNames({
              active: selected === '1',
            })}
            href=""
            onClick={e => this.toggleSelected(e, '1')}
          >
            Poor
          </a>
          <a
            className={classNames({
              active: selected === '2',
            })}
            href=""
            onClick={e => this.toggleSelected(e, '2')}
          >
            Borderline
          </a>
          <a
            className={classNames({
              active: selected === '3',
            })}
            href=""
            onClick={e => this.toggleSelected(e, '3')}
          >
            Acceptable
          </a>
        </div>
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
                    province && colorScale(province[selected] / maxValue).hex();
                  const totalFCSlevelCount =
                    province && province[1] + province[2] + province[3];
                  const tooltip = `${geography.properties.NAME_1}${
                    province
                      ? `: ${province[selected].toFixed(2)} ${
                          selected !== 'avg_FCS'
                            ? ` (${(
                                province[selected] /
                                totalFCSlevelCount *
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
