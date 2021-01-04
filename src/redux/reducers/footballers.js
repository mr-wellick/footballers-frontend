import { FETCH_ERROR, RETRIEVE_SEASONS_SUCCESS, RETRIEVE_SEASON_SUCCESS } from '../constants';

const footballers = (state = { seasons: [], error: null, season: [] }, action) => {
  if (action.type === FETCH_ERROR) {
    const { error } = action.payload;
    return {
      ...state,
      error,
    };
  }

  if (action.type === RETRIEVE_SEASONS_SUCCESS) {
    const { seasons } = action.payload.data;
    return {
      ...state,
      seasons,
      error: null,
    };
  }

  if (action.type === RETRIEVE_SEASON_SUCCESS) {
    const { season } = action.payload.data;
    return {
      ...state,
      season,
      error: null,
    };
  }

  return state;
};

export default footballers;
