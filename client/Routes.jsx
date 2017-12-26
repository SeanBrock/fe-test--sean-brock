import React from 'react';
import {Route, Router, browserHistory} from 'react-router';
import Wines from '../server/wines.json';

export const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Wines} />
    </Router>
  );
};
