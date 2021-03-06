import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

const PageIsLoading = ({ error, pastDelay, timedOut, retry }) => (
  <div className="loader loader__page">
    {error || timedOut ? (
      <div>
        Error loading page,{' '}
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
      <div>Loading page</div>
    ) : null}
  </div>
);

PageIsLoading.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  pastDelay: PropTypes.bool,
  timedOut: PropTypes.bool,
  retry: PropTypes.func,
};

PageIsLoading.defaultProps = {
  error: false,
  pastDelay: false,
  timedOut: false,
  retry: () => {},
};

const PageLoader = opts =>
  Loadable({
    loading: PageIsLoading,
    delay: 200,
    timeout: 10 * 1000,
    ...opts,
  });

export const Home = PageLoader({
  loader: () => import(/* webpackPreload: true */ './_home'),
});

export const Provinces = PageLoader({
  loader: () => import(/* webpackPrefetch: true */ './_provinces'),
});

export const Province = PageLoader({
  loader: () => import(/* webpackPreload: true */ './_province'),
});

export const Heat = PageLoader({
  loader: () => import(/* webpackPrefetch: true */ './_heat'),
});

export const Mpc = PageLoader({
  loader: () => import(/* webpackPrefetch: true */ './_mpc'),
});

export const Pdm = PageLoader({
  loader: () => import(/* webpackPrefetch: true */ './_pdm'),
});

export const NotFound = PageLoader({
  loader: () => import('./_not-found'),
});

export const Contact = PageLoader({
  loader: () => import('./_contact'),
});
