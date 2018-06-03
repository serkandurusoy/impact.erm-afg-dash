import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import chroma from 'chroma-js';
import { getLabel } from '../constants/labels';

class SpotMatrix extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    color: PropTypes.string,
  };

  static defaultProps = {
    color: '#bf4b48',
  };

  state = {
    chartId: btoa(Math.random()).replace(/=/g, ''),
  };

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  }

  render() {
    const { chartId } = this.state;
    const { data, color } = this.props;
    const colorScale = chroma.scale([
      chroma(color)
        .brighten(3)
        .hex(),
      chroma(color)
        .darken(2)
        .hex(),
    ]);

    const maxValue = Math.max(
      ...data.map(d =>
        Math.max(...Object.values(d).map((v, ix) => (ix === 0 ? 0 : v))),
      ),
    );

    return (
      <div className="graph__spotMatrix-wrapper">
        <table className="graph__spotMatrix">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key, ix) => (
                <td key={key}>{ix === 0 ? '' : getLabel(key)}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(d => {
              const [label, ...values] = Object.values(d);
              const sum = values.reduce((t, v) => t + v, 0);
              return (
                <tr key={label}>
                  <td>{getLabel(label)}</td>
                  {values.map((v, ix) => (
                    <td key={ix}>
                      <div
                        data-for={chartId}
                        data-tip={`${v} (${(sum ? (v / sum) * 100 : 0).toFixed(
                          2,
                        )}%)`}
                        className="spotMatrix-circle"
                        style={{
                          backgroundColor: colorScale(v / maxValue).hex(),
                        }}
                      />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <ReactTooltip className="graph__tooltip" id={chartId} />
      </div>
    );
  }
}

export default SpotMatrix;
