import React from 'react';
import PropTypes from 'prop-types';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';
import DataLoader from './data-loader';

const ComponentIsLoading = ({ error, pastDelay, timedOut }) => (
  <div className="loader loader__component">
    {error || timedOut ? (
      <div>Error loading chart</div>
    ) : pastDelay ? (
      <div>Loading chart</div>
    ) : null}
  </div>
);

ComponentIsLoading.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  pastDelay: PropTypes.bool,
  timedOut: PropTypes.bool,
};

ComponentIsLoading.defaultProps = {
  error: false,
  pastDelay: false,
  timedOut: false,
};

const ComponentLoader = opts =>
  LoadableVisibility({
    loading: ComponentIsLoading,
    delay: 200,
    timeout: 10 * 1000,
    render(loaded, props) {
      const Component = loaded.default;
      return (
        <DataLoader {...props}>{data => <Component data={data} />}</DataLoader>
      );
    },
    ...opts,
  });

export default ComponentLoader;
