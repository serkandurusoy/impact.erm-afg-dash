import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BulletGraph from 'react-bullet-graph-react16';
import ReactTooltip from 'react-tooltip';
import chroma from 'chroma-js';
import PROVINCE_INFO from '../../../constants/province-info';

class Chart extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
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
          height: '100%',
          maxWidth: 980,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {data.map((d, index) => {
          if (d['min_s1_full_market_survey/q1_17_2_room_cost_max'] < 1) {
            return null;
          }
          return (
            <React.Fragment key={index}>
              <div
                style={{
                  width: 600,
                  height: 40,
                  margin: '5px auto 35px auto',
                  position: 'relative',
                  fontWeight: 'bold',
                }}
                data-for={`${d['general_info/q3_province']}-maxRent`}
                data-tip={`
              <div style="padding: 10px; line-height: 1.5; text-align: left">
                Min: ${d['min_s1_full_market_survey/q1_17_2_room_cost_max']} AFN
                <br />
                Max: ${d['max_s1_full_market_survey/q1_17_2_room_cost_max']} AFN
                <br />
                Avg: ${d['avg_s1_full_market_survey/q1_17_2_room_cost_max']} AFN
                <br />
                25th: ${d['25_s1_full_market_survey/q1_17_2_room_cost_max']} AFN
                <br />
                75th: ${d['75_s1_full_market_survey/q1_17_2_room_cost_max']} AFN
              </div>
            `}
              >
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <span style={{ width: '70px', textAlign: 'left' }}>
                    {
                      PROVINCE_INFO.find(
                        ({ name }) => name === d['general_info/q3_province'],
                      ).label
                    }
                  </span>
                  {d['max_s1_full_market_survey/q1_17_1_room_cost_max'] ===
                  0 ? (
                    <div className="bullet--dataNotAvailable">
                      Data not available
                    </div>
                  ) : d['min_s1_full_market_survey/q1_17_2_room_cost_max'] ===
                  d['max_s1_full_market_survey/q1_17_2_room_cost_max'] ? (
                    <div className="bullet--dataNotAvailable">
                      Single value of {`"`}
                      {d['min_s1_full_market_survey/q1_17_2_room_cost_max']}
                      {`"`} not chartable
                    </div>
                  ) : (
                    <div style={{ position: 'relative', left: 5 }}>
                      <BulletGraph
                        title=""
                        textLabel=""
                        scaleMin={
                          d['min_s1_full_market_survey/q1_17_2_room_cost_max']
                        }
                        scaleMax={
                          d['max_s1_full_market_survey/q1_17_2_room_cost_max']
                        }
                        symbolMarker={
                          d['25_s1_full_market_survey/q1_17_2_room_cost_max']
                        }
                        performanceVal={
                          d['75_s1_full_market_survey/q1_17_2_room_cost_max']
                        }
                        badVal={0}
                        satisfactoryVal={
                          d['avg_s1_full_market_survey/q1_17_2_room_cost_max']
                        }
                        height={40}
                        width={530}
                        badColor="#ffffff"
                        satisfactoryColor="#a5b9a1"
                        goodColor={`${chroma('#a5b9a1')
                          .darken(2)
                          .hex()}`}
                        isActiveColor
                        opacity={0.6}
                      />
                    </div>
                  )}
                </div>
              </div>
              <ReactTooltip
                className="graph__tooltip"
                id={`${d['general_info/q3_province']}-maxRent`}
                html
              />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Chart;
