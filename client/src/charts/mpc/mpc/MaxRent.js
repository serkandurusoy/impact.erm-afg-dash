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
          if (d['min_s1_full_market_survey/q1_17_2_room_cost_max'] < 1) {
            return null;
          }
          return (
            <React.Fragment key={index}>
              <p>{d['general_info/q3_province']}</p>
              <div
                style={{ width: 600, height: 40, margin: '5px auto 35px auto' }}
                data-for={`${d['general_info/q3_province']}-maxRent`}
                data-tip={`
              <div style="padding: 10px; line-height: 1.5; text-align: left">
                Min: ${d['min_s1_full_market_survey/q1_17_2_room_cost_max']}
                <br />
                Max: ${d['max_s1_full_market_survey/q1_17_2_room_cost_max']}
                <br />
                Avg: ${d['avg_s1_full_market_survey/q1_17_2_room_cost_max']}
                <br />
                25th: ${d['25_s1_full_market_survey/q1_17_2_room_cost_max']}
                <br />
                75th: ${d['75_s1_full_market_survey/q1_17_2_room_cost_max']}
              </div>
            `}
              >
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
                  width={600}
                  badColor="#ffffff"
                  satisfactoryColor="#ee4e4e"
                  goodColor="#ff776f"
                  isActiveColor
                  opacity={0.6}
                />
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
