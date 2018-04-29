import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import chroma from 'chroma-js';
import { getLabel } from '../constants/labels';

class SpotMatrix extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    colorMin: PropTypes.string,
    colorMax: PropTypes.string,
  };

  static defaultProps = {
    colorMin: 'fbd9d9',
    colorMax: 'bf4b48',
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
    const { data, colorMin, colorMax } = this.props;
    const colorScale = chroma.scale([colorMin, colorMax]);

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
            {data.map(d => (
              <tr key={Object.values(d)[0]}>
                {Object.entries(d).map(([k, v], ix) => (
                  <td key={k}>
                    {ix === 0 ? (
                      getLabel(v)
                    ) : (
                      <div
                        data-for={chartId}
                        data-tip={v}
                        className="spotMatrix-circle"
                        style={{
                          backgroundColor: colorScale(v / maxValue).hex(),
                        }}
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <ReactTooltip className="graph__tooltip" id={chartId} />
      </div>
    );
  }
}

export default SpotMatrix;
