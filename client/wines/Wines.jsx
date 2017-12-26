import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactStars from 'react-star-ratings';
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
        <select className='year__select'><option value="year">Year Select</option></select>
        <ul className="wines__list">

          {
            this.props.wines
              .map(wine =>
                <div>
                  <li key={wine.name} className="wine"><img className="winepic"
                  src={placeholder}/>{wine.name}, {wine.vintage} {bestSeller(wine.unitsSold)}
                    <li className="wine__type"><t>{wine.type}</t></li>
                    <t2 className="stars"> {averagedReviews(wine.ratings)}</t2>
                    <t3 className="reviews">({totalReviews(wine.ratings)})</t3>
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

function bestSeller(arg) {
  //to do write function to check against all wines in database
  //would be more efficient to sort wines once by sales and list best selling
  //or label any wine a best seller once a certain number of bottles have sold per month/year...
}
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
  var total = Math.round(sum / arg.length)
  if (total >= 0) {
    return total.toString() + ' star rating.'
  } else {
    return null
  }
}
//function returning average rating among reviews
//need to come back in and implement react star rating system.
function totalReviews (arg) {
  return arg.length.toString()
}
//function returning total numbers of reviews
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wines);
