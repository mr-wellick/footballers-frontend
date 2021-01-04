import { RETRIEVE_SEASON_SUCCESS } from '../constants';

const retrieveSeasonSuccess = (data) => {
  return {
    type: RETRIEVE_SEASON_SUCCESS,
    payload: { data },
  };
};

export default retrieveSeasonSuccess;
