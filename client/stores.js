import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

export function configureStore() {
  const store = applyMiddleware(thunk)(createStore)(reducers);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
