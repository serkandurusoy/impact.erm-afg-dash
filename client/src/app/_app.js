import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import localForage from 'localforage';
import axios from 'axios';
import Routes from './_routes';
import { Layout } from '../components/index';

class App extends Component {
  state = {
    loading: true,
    error: false,
  };

  async componentDidMount() {
    try {
      const cachedLastUpdate = await localForage
        .getItem('lastUpdate')
        // eslint-disable-next-line no-console
        .catch(localForageError => console.log({ localForageError }));

      const cachedVersion = await localForage
        .getItem('version')
        // eslint-disable-next-line no-console
        .catch(localForageError => console.log({ localForageError }));

      const {
        data: { noCache, lastUpdate, version },
      } = await axios.get('/api/lastUpdate');

      if (
        noCache ||
        !cachedLastUpdate ||
        new Date(lastUpdate) > new Date(cachedLastUpdate) ||
        !cachedVersion ||
        cachedVersion !== version
      ) {
        await localForage
          .clear()
          // eslint-disable-next-line no-console
          .catch(localForageError => console.log({ localForageError }));

        await localForage
          .setItem('noCache', noCache)
          // eslint-disable-next-line no-console
          .catch(localForageError => console.log({ localForageError }));

        await localForage
          .setItem('lastUpdate', lastUpdate)
          // eslint-disable-next-line no-console
          .catch(localForageError => console.log({ localForageError }));

        await localForage
          .setItem('version', version)
          // eslint-disable-next-line no-console
          .catch(localForageError => console.log({ localForageError }));
      }

      this.setState({ loading: false, error: false });
    } catch (apiError) {
      // eslint-disable-next-line no-console
      console.log({ apiError });

      this.setState({ loading: false, error: true }, async () => {
        await localForage
          .clear()
          // eslint-disable-next-line no-console
          .catch(localForageError => console.log({ localForageError }));
      });
    }
  }

  render() {
    const { loading, error } = this.state;

    return (
      <Layout>
        {loading ? (
          <div className="loader loader__page">
            <div>Loading page</div>
          </div>
        ) : error ? (
          <div className="loader loader__page">
            <div>Error loading page</div>
          </div>
        ) : (
          <Routes />
        )}
      </Layout>
    );
  }
}

export default hot(module)(App);
