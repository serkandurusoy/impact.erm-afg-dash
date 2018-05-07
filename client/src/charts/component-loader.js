import React from 'react';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';
import DataLoader from './data-loader';

const ComponentLoader = ({ subTitle, ...opts }) =>
  LoadableVisibility({
    // eslint-disable-next-line react/prop-types
    loading: ({ error, pastDelay, timedOut, retry }) => (
      <div className="loader loader__component">
        <div>
          <div className="loader__header">
            <div className="graph__subtitle">{subTitle}</div>
          </div>
          {error || timedOut ? (
            <div className="loader__message">
              Error loading chart,{' '}
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  retry();
                }}
              >
                click here
              </a>{' '}
              to retry.
            </div>
          ) : pastDelay ? (
            <div className="loader__message">Loading chart</div>
          ) : (
            <div className="loader__message">{null}</div>
          )}
        </div>
      </div>
    ),
    delay: 200,
    timeout: 10 * 1000,
    render(loaded, props) {
      const ChartComponent = loaded.default;
      return (
        <DataLoader {...props} subTitle={subTitle}>
          {(data, fullScreen) => (
            <ChartComponent data={data} {...props} fullScreen={fullScreen} />
          )}
        </DataLoader>
      );
    },
    ...opts,
  });

export default ComponentLoader;
