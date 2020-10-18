import { FETCH_SEASONS_ERROR } from "../constants/";
import { FETCH_SEASONS_SUCCESS } from "../constants/";

const promiseUtil = promise =>
  promise
    .then(res => res.json())
    .then(data => [null, data])
    .catch(err => [err]);

const fetchSeasons = () => {
  return async dispatch => {
    const [err, seasons] = await promiseUtil(
      fetch("http://localhost:5000/api/v1/seasons")
    );
    if (err) {
      return dispatch({
        type: FETCH_SEASONS_ERROR,
        payload: { err }
      });
    }

    return dispatch({
      type: FETCH_SEASONS_SUCCESS,
      payload: { seasons }
    });
  };
};

export default fetchSeasons;
