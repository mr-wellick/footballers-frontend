import { promiseHelper } from '../../utilities';
import fetchError from './fetch-error';
import retrieveSeasonSuccess from './retrieve-season-success';

const retrieveSeason = (season) => {
  return async (dispatch) => {
    const [err, res] = await promiseHelper(
      fetch(`http://localhost:5000/api/v1/footballers/season`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ season }),
      })
    );

    if (err) {
      const error = {
        message: `Cannot retrieve footballers for the following season: ${season.split('_')[1]}`,
      };
      return dispatch(fetchError(error));
    }

    const data = {
      season: res.season,
      activeSeason: season,
    };
    return dispatch(retrieveSeasonSuccess(data));
  };
};

export default retrieveSeason;
