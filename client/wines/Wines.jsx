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
        <div class="dropdown-content">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
        <ul className="wines__list">
          {
            this.props.wines
              .map(wine =>
                <div>
                  <li key={wine.name} className="wine"><img className="winepic"
                  src={placeholder}/>{wine.name}, {wine.vintage}
                    <li className="wine__type"><t>{wine.type}</t></li>
                    <t2 className="stars"> {averagedReviews(wine.ratings)}</t2>
                    <t3 className="reviews"> ({totalReviews(wine.ratings)})</t3>
                  </li>

                </div>)
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
function averagedReviews(arg) {
  var sum = 0
  for (var i =0; i < arg.length; i += 1) {
    sum += arg[i].stars
  }
  var total = sum / arg.length
  return total.toString()
}
//function returning average rating among reviews
function totalReviews (arg) {
  return arg.length.toString()
}
//function returning total numbers of reviews
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wines);
