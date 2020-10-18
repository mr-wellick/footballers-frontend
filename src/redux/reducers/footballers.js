import { FETCH_SEASONS_ERROR } from "../constants/";
import { FETCH_SEASONS_SUCCESS } from "../constants/";

const footballersReducer = (
  state = {
    seasons: [],
    activeSeason: "",
    activePosition: "F"
  },
  action
) => {
  if (action.type === FETCH_SEASONS_SUCCESS) {
    let { seasons } = action.payload;
    seasons = seasons.map(season => season.Tables_in_poc_config);

    return {
      ...state,
      activeSeason: seasons[0],
      seasons
    };
  }

  return state;
};

export default footballersReducer;
