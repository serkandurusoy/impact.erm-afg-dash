import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import PROVINCE_GEO_DATA from '../constants/province-geo-data';

class ProvinceFilterMap extends Component {
  static propTypes = {
    selectedProvinces: PropTypes.arrayOf(PropTypes.number).isRequired,
    toggleSelectedProvince: PropTypes.func.isRequired,
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.selectedProvinces.length !== nextProps.selectedProvinces.length
    ) {
      this.forceUpdate();
    }
  }

  render() {
    const { selectedProvinces, toggleSelectedProvince } = this.props;
    return (
      <div className="subpage-map__right">
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
                  geographies.map(geography => (
                    <Geography
                      onClick={() =>
                        toggleSelectedProvince(geography.properties.ID_1)
                      }
                      key={geography.properties.ID_1}
                      cacheId={`${selectedProvinces.join('')}-${
                        geography.properties.ID_1
                      }`}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: selectedProvinces.includes(
                            geography.properties.ID_1,
                          )
                            ? '#EE4E4E'
                            : '#ECEFF1',
                          stroke: '#607D8B',
                          strokeWidth: 0.01,
                          outline: 'none',
                        },
                        hover: {
                          fill: selectedProvinces.includes(
                            geography.properties.ID_1,
                          )
                            ? '#9D2104'
                            : '#607D8B',
                          stroke: '#607D8B',
                          strokeWidth: 0.01,
                          outline: 'none',
                        },
                        pressed: {
                          fill: selectedProvinces.includes(
                            geography.properties.ID_1,
                          )
                            ? '#9D2104'
                            : '#607D8B',
                          stroke: '#607D8B',
                          strokeWidth: 0.01,
                          outline: 'none',
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    );
  }
}

export default ProvinceFilterMap;
