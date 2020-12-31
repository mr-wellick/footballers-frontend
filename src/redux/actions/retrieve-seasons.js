import { promiseHelper } from '../../utilities';
import fetchError from './fetch-error';
import retrieveSeasonsSuccess from './retrieve-seasons-success';

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

    const data = {
      seasons: res.seasons,
      error: {},
    };
    return dispatch(retrieveSeasonsSuccess(data));
  };
};

export default retrieveSeasons;
