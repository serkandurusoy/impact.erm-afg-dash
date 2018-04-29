import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BulletGraph from 'react-bullet-graph-react16';
import ReactTooltip from 'react-tooltip';

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
          if (d['min_s1_full_market_survey/q1_17_1_room_cost_min'] < 1) {
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
                }}
                data-for={`${d['general_info/q3_province']}-minRent`}
                data-tip={`
              <div style="padding: 10px; line-height: 1.5; text-align: left">
                Min: ${d['min_s1_full_market_survey/q1_17_1_room_cost_min']}
                <br />
                Max: ${d['max_s1_full_market_survey/q1_17_1_room_cost_min']}
                <br />
                Avg: ${d['avg_s1_full_market_survey/q1_17_1_room_cost_min']}
                <br />
                25th: ${d['25_s1_full_market_survey/q1_17_1_room_cost_min']}
                <br />
                75th: ${d['75_s1_full_market_survey/q1_17_1_room_cost_min']}
              </div>
            `}
              >
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <span style={{ width: '70px', textAlign: 'left' }}>
                    {d['general_info/q3_province']}
                  </span>
                  {d['min_s1_full_market_survey/q1_17_1_room_cost_min'] ===
                  0 ? (
                    <div className="bullet--dataNotAvailable">
                      Data not available
                    </div>
                  ) : d['min_s1_full_market_survey/q1_17_1_room_cost_min'] ===
                  d['max_s1_full_market_survey/q1_17_1_room_cost_min'] ? (
                    <div className="bullet--dataNotAvailable">
                      Single value of {`"`}
                      {d['min_s1_full_market_survey/q1_17_1_room_cost_min']}
                      {`"`} not chartable
                    </div>
                  ) : (
                    <BulletGraph
                      title=""
                      textLabel=""
                      scaleMin={
                        d['min_s1_full_market_survey/q1_17_1_room_cost_min']
                      }
                      scaleMax={
                        d['max_s1_full_market_survey/q1_17_1_room_cost_min']
                      }
                      symbolMarker={
                        d['25_s1_full_market_survey/q1_17_1_room_cost_min']
                      }
                      performanceVal={
                        d['75_s1_full_market_survey/q1_17_1_room_cost_min']
                      }
                      badVal={0}
                      satisfactoryVal={
                        d['avg_s1_full_market_survey/q1_17_1_room_cost_min']
                      }
                      height={40}
                      width={530}
                      badColor="#ffffff"
                      satisfactoryColor="#ee4e4e"
                      goodColor="#ff776f"
                      isActiveColor
                      opacity={0.6}
                    />
                  )}
                </div>
              </div>
              <ReactTooltip
                className="graph__tooltip"
                id={`${d['general_info/q3_province']}-minRent`}
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
