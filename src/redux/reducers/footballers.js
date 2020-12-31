import { FETCH_ERROR, RETRIEVE_SEASON, RETRIEVE_SEASONS_SUCCESS } from '../constants';

const footballers = (state = { seasons: [], error: {}, season: [] }, action) => {
  if (action.type === FETCH_ERROR) {
    const { error } = action.payload;
    return {
      ...state,
      error,
    };
  }

  if (action.type === RETRIEVE_SEASONS_SUCCESS) {
    const { seasons, error } = action.payload.data;
    return {
      ...state,
      seasons,
      error,
    };
  }

  if (action.type === RETRIEVE_SEASON) {
    const { season, error } = action.payload;
    return {
      ...state,
      season,
      error,
    };
  }

  return state;
};

export default footballers;
