import { FETCH_ERROR } from '../../constants';
import fetchError from '../fetch-error';

test('Produce error action', () => {
  const error = {
    message: 'Unable to retrieve seasons.',
  };
  const expectedAction = {
    type: FETCH_ERROR,
    payload: {
      error,
    },
  };

  expect(fetchError(error)).toEqual(expectedAction);
});
