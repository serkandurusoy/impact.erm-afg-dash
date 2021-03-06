import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BulletGraph from 'react-bullet-graph-react16';
import ReactTooltip from 'react-tooltip';
import chroma from 'chroma-js';

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
            width: 390,
            height: 40,
            margin: '0 auto',
            fontWeight: 'bold',
          }}
          data-for="averageIncomeBeforeShock"
          data-tip={`
            <div style="padding: 10px; line-height: 1.5; text-align: left">
              Min: ${data.min_S4_financial_ASSESSq4_3_income_before}
              <br />
              Max: ${data.max_S4_financial_ASSESSq4_3_income_before}
              <br />
              Avg: ${data.avg_S4_financial_ASSESSq4_3_income_before}
              <br />
              25th: ${data['25_S4_financial_ASSESSq4_3_income_before']}
              <br />
              75th: ${data['75_S4_financial_ASSESSq4_3_income_before']}
            </div>
          `}
        >
          {data.max_S4_financial_ASSESSq4_3_income_before === 0 ? (
            <div className="bullet--dataNotAvailable">Data not available</div>
          ) : data.min_S4_financial_ASSESSq4_3_income_before ===
          data.max_S4_financial_ASSESSq4_3_income_before ? (
            <div className="bullet--dataNotAvailable">
              Single value of {`"`}
              {data.min_S4_financial_ASSESSq4_3_income_before}
              {`"`} not chartable
            </div>
          ) : (
            <BulletGraph
              title=""
              textLabel=""
              scaleMin={data.min_S4_financial_ASSESSq4_3_income_before}
              scaleMax={data.max_S4_financial_ASSESSq4_3_income_before}
              symbolMarker={data['25_S4_financial_ASSESSq4_3_income_before']}
              performanceVal={data['75_S4_financial_ASSESSq4_3_income_before']}
              badVal={0}
              satisfactoryVal={data.avg_S4_financial_ASSESSq4_3_income_before}
              height={40}
              width={390}
              badColor="#ffffff"
              satisfactoryColor="#fff67a"
              goodColor={`${chroma('#fff67a')
                .darken(1)
                .hex()}`}
              isActiveColor
              opacity={0.6}
            />
          )}
        </div>
        <ReactTooltip
          className="graph__tooltip"
          id="averageIncomeBeforeShock"
          html
        />
      </div>
    );
  }
}

export default Chart;
