import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import placeholder from './wine-placeholder.png'
  //importing image for wine placeholder
import * as actionCreators from './wineActions';

import './wines.scss';

export class Wines extends Component {
  componentDidMount() {
    this.props.actions.fetchWines();
  }

  render() {
    return (
      <div className="wines">
        <h1 className="wines__title">Wine List</h1>
        <h2 className="wines__pulldown">Wine pulldown to go here</h2>
        <ul className="wines__list">
          {
            this.props.wines
              .map(wine => <li key={wine.name} className="wine"><img src={placeholder} />{wine.name}, {wine.vintage}, {wine.type}

                </li>)
          }
        </ul>
      </div>
    );
  }
}

Wines.propTypes = {
  wines: PropTypes.array,
  actions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    ...state.wines
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wines);
