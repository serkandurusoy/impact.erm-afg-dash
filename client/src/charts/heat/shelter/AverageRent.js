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
          style={{ width: 600, height: 40, margin: '0 auto' }}
          data-for="averageRent"
          data-tip={`
            <div style="padding: 10px; line-height: 1.5; text-align: left">
              Min: ${data.min_S7_SHELTERq7_4_if_rented_amount}
              <br />
              Max: ${data.max_S7_SHELTERq7_4_if_rented_amount}
              <br />
              Avg: ${data.avg_S7_SHELTERq7_4_if_rented_amount}
              <br />
              25th: ${data['25_S7_SHELTERq7_4_if_rented_amount']}
              <br />
              75th: ${data['75_S7_SHELTERq7_4_if_rented_amount']}
            </div>
          `}
        >
          {data.max_S7_SHELTERq7_4_if_rented_amount === 0 ? (
            <div className="bullet--dataNotAvailable">Data not available</div>
          ) : data.min_S7_SHELTERq7_4_if_rented_amount ===
          data.max_S7_SHELTERq7_4_if_rented_amount ? (
            <div className="bullet--dataNotAvailable">
              Single value of {`"`}
              {data.min_S7_SHELTERq7_4_if_rented_amount}
              {`"`} not chartable
            </div>
          ) : (
            <BulletGraph
              title=""
              textLabel=""
              scaleMin={data.min_S7_SHELTERq7_4_if_rented_amount}
              scaleMax={data.max_S7_SHELTERq7_4_if_rented_amount}
              symbolMarker={data['25_S7_SHELTERq7_4_if_rented_amount']}
              performanceVal={data['75_S7_SHELTERq7_4_if_rented_amount']}
              badVal={0}
              satisfactoryVal={data.avg_S7_SHELTERq7_4_if_rented_amount}
              height={40}
              width={600}
              badColor="#ffffff"
              satisfactoryColor="#f69e61"
              goodColor={`${chroma('#f69e61')
                .darken(2)
                .hex()}`}
              isActiveColor
              opacity={0.6}
            />
          )}
        </div>
        <ReactTooltip className="graph__tooltip" id="averageRent" html />
      </div>
    );
  }
}

export default Chart;
