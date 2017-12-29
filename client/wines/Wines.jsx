import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactStars from 'react-star-ratings';
import placeholder from './wine-placeholder.png'
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
              <li key={wine.name} className="wine"><img className="winepic"
              src={placeholder}/>{wine.name}, {wine.vintage} {bestSeller(wine.unitsSold)}
                <t1 className="wine__type"><t>{wine.type}</t></t1>
                <t2 className="stars">{` ${averagedReviews(wine.ratings)} star rating`}</t2>
                <t3 className="reviews">({totalReviews(wine.ratings)})</t3>
              </li>
            )
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
function averagedReviews(arr) {
  const sum = arr.reduce((sum, rating) => {
    return sum += rating.stars;
  }, 0);

  return arr.length > 0
    ? sum / arr.length
    : 0;
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
