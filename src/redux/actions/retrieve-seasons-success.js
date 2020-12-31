import { RETRIEVE_SEASONS_SUCCESS } from '../constants';

const retrieveSeasonsSuccess = (data) => {
  return {
    type: RETRIEVE_SEASONS_SUCCESS,
    payload: { data },
  };
};

export default retrieveSeasonsSuccess;
