import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import PROVINCE_GEO_DATA from '../constants/province-geo-data';

class ProvinceFilterMap extends Component {
  static propTypes = {
    selectedProvinces: PropTypes.arrayOf(PropTypes.number).isRequired,
    toggleSelectedProvince: PropTypes.func.isRequired,
  };

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
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
              <Geographies geography={PROVINCE_GEO_DATA} disableOptimization>
                {(geographies, projection) =>
                  geographies.map(geography => {
                    const {
                      ID_1: provinceId,
                      NAME_1: provinceName,
                    } = geography.properties;
                    const provinceIsSelected = selectedProvinces.includes(
                      provinceId,
                    );
                    return (
                      <Geography
                        onClick={() => toggleSelectedProvince(provinceId)}
                        data-tip={provinceName}
                        data-for="provinceFilterMap"
                        cacheId={`${provinceName}-${
                          !provinceIsSelected ? 'un' : ''
                        }selected`}
                        key={geography.properties.ID_1}
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: provinceIsSelected ? '#EE4E4E' : '#ECEFF1',
                            stroke: '#607D8B',
                            strokeWidth: 0.01,
                            outline: 'none',
                          },
                          hover: {
                            fill: provinceIsSelected ? '#9D2104' : '#607D8B',
                            stroke: '#607D8B',
                            strokeWidth: 0.01,
                            outline: 'none',
                          },
                          pressed: {
                            fill: provinceIsSelected ? '#9D2104' : '#607D8B',
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
          <ReactTooltip className="graph__tooltip" id="provinceFilterMap" />
        </div>
      </div>
    );
  }
}

export default ProvinceFilterMap;
