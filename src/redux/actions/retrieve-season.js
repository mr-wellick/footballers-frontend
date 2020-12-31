import { promiseHelper } from "../../utilities";
import { FETCH_ERROR, RETRIEVE_SEASON } from "../constants";

const retrieveSeason = (season) => {
  return async (dispatch) => {
    const [err, res] = await promiseHelper(
      fetch(`http://localhost:5000/api/v1/footballers/season`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ season }),
      })
    );

    if (err) {
      return dispatch({
        type: FETCH_ERROR,
        payload: {
          error: {
            message: `Cannot retrieve footballers for the following season: ${
              season.split("_")[1]
            }`,
          },
        },
      });
    }

    return dispatch({
      type: RETRIEVE_SEASON,
      payload: { season: res.season, error: {} },
    });
  };
};

export default retrieveSeason;
