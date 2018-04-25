import React from 'react';
import PropTypes from 'prop-types';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';
import ChartDataLoader from './chart-data-loader';

const ChartIsLoading = ({ error, pastDelay, timedOut }) => (
  <div className="loader loader__component">
    {error || timedOut ? (
      <div>Error loading chart</div>
    ) : pastDelay ? (
      <div>Loading chart</div>
    ) : null}
  </div>
);

ChartIsLoading.propTypes = {
  error: PropTypes.bool,
  pastDelay: PropTypes.bool,
  timedOut: PropTypes.bool,
};

ChartIsLoading.defaultProps = {
  error: false,
  pastDelay: false,
  timedOut: false,
};

const ChartLoader = opts =>
  LoadableVisibility({
    loading: ChartIsLoading,
    delay: 200,
    timeout: 10 * 1000,
    render(loaded, props) {
      const Component = loaded.default;
      return (
        <ChartDataLoader {...props}>
          {data => <Component data={data} />}
        </ChartDataLoader>
      );
    },
    ...opts,
  });

export default ChartLoader;
