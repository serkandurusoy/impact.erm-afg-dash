import React from 'react';
import PropTypes from 'prop-types';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';

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
    ...opts,
  });

export default ChartLoader;
