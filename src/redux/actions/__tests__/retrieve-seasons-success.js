import { RETRIEVE_SEASONS_SUCCESS } from '../../constants';
import retrieveSeasonsSuccess from '../retrieve-seasons-success';

test('Produce seasons success action', () => {
  const data = {
    seasons: ['2005'],
    error: {},
  };
  const expectedAction = {
    type: RETRIEVE_SEASONS_SUCCESS,
    payload: { data },
  };

  expect(retrieveSeasonsSuccess(data)).toEqual(expectedAction);
});
