import { promiseHelper } from '../../utilities';
import { RETRIEVE_SEASONS } from '../constants';
import fetchError from './fetch-error';

const retrieveSeasons = () => {
  return async (dispatch) => {
    const [err, res] = await promiseHelper(
      fetch('http://localhost:5000/api/v1/footballers/seasons')
    );

    if (err) {
      const error = {
        message: 'Unable to retrieve seasons.',
      };
      return dispatch(fetchError(error));
    }

    return dispatch({
      type: RETRIEVE_SEASONS,
      payload: { seasons: res.seasons, error: {} },
    });
  };
};

export default retrieveSeasons;
