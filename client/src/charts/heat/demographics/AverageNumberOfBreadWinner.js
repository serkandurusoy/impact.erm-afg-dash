import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import classNames from 'classnames';
import chroma from 'chroma-js';
import ReactTooltip from 'react-tooltip';
import PROVINCE_INFO from '../../../constants/province-info';
import PROVINCE_GEO_DATA from '../../../constants/province-geo-data';

const colorScaleFemale = chroma.scale([
  `#cf3e3e`,
  `${chroma('#cf3e3e')
    .darken(2)
    .hex()}`,
]);
const colorScaleMale = chroma.scale([
  `${chroma('#078ec7')
    .brighten(1.7)
    .hex()}`,
  `${chroma('#078ec7')
    .darken(1.7)
    .hex()}`,
]);

class Chart extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  };

  state = {
    selected: 'S4_financial_ASSESSfemale_breadwinner',
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
        <select className="graph__filter">
          <option selected>Female</option>
          <option>Male</option>
        </select>
        <div className="chartLayerSelector">
          <a
            className={classNames({
              active: selected === 'S4_financial_ASSESSfemale_breadwinner',
            })}
            href=""
            onClick={e =>
              this.toggleSelected(e, 'S4_financial_ASSESSfemale_breadwinner')
            }
          >
            Female
          </a>
          <a
            className={classNames({
              active: selected === 'S4_financial_ASSESSmale_breadwinner',
            })}
            href=""
            onClick={e =>
              this.toggleSelected(e, 'S4_financial_ASSESSmale_breadwinner')
            }
          >
            Male
          </a>
        </div>
        <ComposableMap width={600} height={500}>
          <ZoomableGroup zoom={18} center={[67, 34]} disablePanning>
            <Geographies geography={PROVINCE_GEO_DATA} disableOptimization>
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
                    (selected === 'S4_financial_ASSESSmale_breadwinner'
                      ? colorScaleMale
                      : colorScaleFemale)(province[selected]).hex();
                  const tooltip = `${geography.properties.NAME_1}${
                    province ? `: ${province[selected]}` : ''
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
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip className="graph__tooltip" id={selected} />
      </div>
    );
  }
}

export default Chart;
