import data from './wines.json';

export function receiveWines(wines) {
  return {
    type: 'FETCH_WINES_SUCCESS',
    wines
  };
}

export function fetchWines() {
  return function(dispatch) {
    // // Replace this with a call to the server.
    dispatch(receiveWines(data.wines));
      //fetch("http://localhost:8080/api/v1/wines")
      //.then(dispatch(receiveWines(res => res.json())))
      //still needs work
  };
}
