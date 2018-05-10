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
          maxWidth: 980,
          margin: '0 auto',
        }}
      >
        <div
          style={{
            width: 600,
            height: 40,
            margin: '0 auto',
            fontWeight: 'bold',
          }}
          data-for="averageCashReceived"
          data-tip={`
            <div style="padding: 10px; line-height: 1.5; text-align: left">
              Min: ${data.min_s2_cash_distribution_processq2_3_how_mach_cash}
              <br />
              Max: ${data.max_s2_cash_distribution_processq2_3_how_mach_cash}
              <br />
              Avg: ${data.avg_s2_cash_distribution_processq2_3_how_mach_cash}
              <br />
              25th: ${data['25_s2_cash_distribution_processq2_3_how_mach_cash']}
              <br />
              75th: ${data['75_s2_cash_distribution_processq2_3_how_mach_cash']}
            </div>
          `}
        >
          {data.max_s2_cash_distribution_processq2_3_how_mach_cash === 0 ? (
            <div className="bullet--dataNotAvailable">Data not available</div>
          ) : data.min_s2_cash_distribution_processq2_3_how_mach_cash ===
          data.max_s2_cash_distribution_processq2_3_how_mach_cash ? (
            <div className="bullet--dataNotAvailable">
              Single value of {`"`}
              {data.min_s2_cash_distribution_processq2_3_how_mach_cash}
              {`"`} not chartable
            </div>
          ) : (
            <BulletGraph
              title=""
              textLabel=""
              scaleMin={data.min_s2_cash_distribution_processq2_3_how_mach_cash}
              scaleMax={data.max_s2_cash_distribution_processq2_3_how_mach_cash}
              symbolMarker={
                data['25_s2_cash_distribution_processq2_3_how_mach_cash']
              }
              performanceVal={
                data['75_s2_cash_distribution_processq2_3_how_mach_cash']
              }
              badVal={0}
              satisfactoryVal={
                data.avg_s2_cash_distribution_processq2_3_how_mach_cash
              }
              height={40}
              width={600}
              badColor="#ffffff"
              satisfactoryColor="#ee4e4e"
              goodColor="#ff776f"
              isActiveColor
              opacity={0.6}
            />
          )}
        </div>
        <ReactTooltip
          className="graph__tooltip"
          id="averageCashReceived"
          html
        />
      </div>
    );
  }
}

export default Chart;
