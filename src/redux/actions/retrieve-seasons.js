import { promiseHelper } from "../../utilities";
import { RETRIEVE_SEASONS, FETCH_ERROR } from "../constants";

const retrieveSeasons = () => {
  return async (dispatch) => {
    const [err, res] = await promiseHelper(
      fetch("http://localhost:5000/api/v1/footballers/seasons")
    );

    if (err) {
      return dispatch({
        type: FETCH_ERROR,
        payload: { error: { message: "Unable to retrieve seasons." } },
      });
    }

    return dispatch({
      type: RETRIEVE_SEASONS,
      payload: { seasons: res.seasons, error: {} },
    });
  };
};

export default retrieveSeasons;
