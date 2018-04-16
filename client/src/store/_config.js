import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './_reducer';

const config = (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  if (module.hot) {
    module.hot.accept('./_reducer', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('./_reducer');

      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default config;
