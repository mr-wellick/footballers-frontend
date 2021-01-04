import { RETRIEVE_SEASON_SUCCESS } from '../../constants';
import retrieveSeasonSuccess from '../retrieve-season-success';

test('Produce season success action', () => {
  const data = {
    season: [
      {
        name: 'Juliano Belletti',
        pos: 'D',
        age: '44',
        nat: 'Brazil',
        app: '30',
        sub: '1',
        g: '0',
        a: '3',
        sh: '10',
        st: '2',
        fc: '38',
        fa: '36',
        yc: '9',
        rc: '0',
        num: '2',
      },
    ],
  };
  const expectedAction = {
    type: RETRIEVE_SEASON_SUCCESS,
    payload: {
      data,
    },
  };

  expect(retrieveSeasonSuccess(data)).toEqual(expectedAction);
});
