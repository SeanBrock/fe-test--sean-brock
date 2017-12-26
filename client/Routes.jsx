import React from 'react';
import {Route, Router, browserHistory} from 'react-router';
import Wines from './wines/Wines';
fetch('http://localhost:8080/api/v1/wines')
export const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Wines} />
    </Router>
  );
};
