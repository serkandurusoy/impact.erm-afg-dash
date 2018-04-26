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
        .catch(localForageError => console.log({ localForageError }));

      const cachedVersion = await localForage
        .getItem('version')
        .catch(localForageError => console.log({ localForageError }));

      const {
        data: { lastUpdate, version },
      } = await axios.get('/api/lastUpdate');

      if (
        !cachedLastUpdate ||
        new Date(lastUpdate) > new Date(cachedLastUpdate) ||
        !cachedVersion ||
        cachedVersion !== version
      ) {
        await localForage
          .clear()
          .catch(localForageError => console.log({ localForageError }));

        await localForage
          .setItem('lastUpdate', lastUpdate)
          .catch(localForageError => console.log({ localForageError }));

        await localForage
          .setItem('version', version)
          .catch(localForageError => console.log({ localForageError }));
      }

      this.setState({ loading: false, error: false });
    } catch (apiError) {
      console.log({ apiError });

      this.setState({ loading: false, error: true }, async () => {
        await localForage
          .clear()
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
