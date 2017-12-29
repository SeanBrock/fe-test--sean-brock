import React from 'react';
import {Route, Router, browserHistory} from 'react-router';
import Wines from './wines/Wines';

//Getting closer here. Still having trouble with the return and parsing the JSON winelist

// class Wines extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       Wines: null,
//     }
//   }
//   componentDidMount() {
//     fetch('http://localhost:8080/api/v1/wines')
//       .then((res) => res.json())
//       .then((Wines) => {this.setState({Wines})})
//   }
//   render() {
//     if(!this.state.Wines) {
//       return <div>loading</div>
//     }
//     return (
//     <div>
//       {JSON.stringify(this.state.Wines)}
//     </div>
//     )
//   }
// }

export const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Wines} />
    </Router>
  );
};
