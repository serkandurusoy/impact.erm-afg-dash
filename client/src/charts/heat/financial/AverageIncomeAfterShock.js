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
          style={{ width: 390, height: 40, margin: '0 auto' }}
          data-for="averageIncomeAfterShock"
          data-tip={`
            <div style="padding: 10px; line-height: 1.5; text-align: left">
              Min: ${data.min_S4_financial_ASSESSq4_4_income_after}
              <br />
              Max: ${data.max_S4_financial_ASSESSq4_4_income_after}
              <br />
              Avg: ${data.avg_S4_financial_ASSESSq4_4_income_after}
              <br />
              25th: ${data['25_S4_financial_ASSESSq4_4_income_after']}
              <br />
              75th: ${data['75_S4_financial_ASSESSq4_4_income_after']}
            </div>
          `}
        >
          {data.max_S4_financial_ASSESSq4_4_income_after === 0 ? (
            <div className="bullet--dataNotAvailable">Data not available</div>
          ) : data.min_S4_financial_ASSESSq4_4_income_after ===
          data.max_S4_financial_ASSESSq4_4_income_after ? (
            <div className="bullet--dataNotAvailable">
              Single value of {`"`}
              {data.min_S4_financial_ASSESSq4_4_income_after}
              {`"`} not chartable
            </div>
          ) : (
            <BulletGraph
              title=""
              textLabel=""
              scaleMin={data.min_S4_financial_ASSESSq4_4_income_after}
              scaleMax={data.max_S4_financial_ASSESSq4_4_income_after}
              symbolMarker={data['25_S4_financial_ASSESSq4_4_income_after']}
              performanceVal={data['75_S4_financial_ASSESSq4_4_income_after']}
              badVal={0}
              satisfactoryVal={data.avg_S4_financial_ASSESSq4_4_income_after}
              height={40}
              width={390}
              badColor="#ffffff"
              satisfactoryColor="#56b3cd"
              goodColor={`${chroma('#56b3cd')
                .darken(2)
                .hex()}`}
              isActiveColor
              opacity={0.6}
            />
          )}
        </div>
        <ReactTooltip
          className="graph__tooltip"
          id="averageIncomeAfterShock"
          html
        />
      </div>
    );
  }
}

export default Chart;
