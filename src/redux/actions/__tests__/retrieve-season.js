import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { RETRIEVE_SEASON_SUCCESS } from '../../constants';
import retrieveSeason from '../retrieve-season';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('Should produce a success object', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  fetchMock.post('http://localhost:5000/api/v1/footballers/season', {
    body: {
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
    },
    headers: { 'content-type': 'application/json' },
  });

  const expectedActions = [
    {
      type: RETRIEVE_SEASON_SUCCESS,
      payload: {
        data: {
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
        },
      },
    },
  ];

  const store = mockStore({ season: [] });
  return store.dispatch(retrieveSeason('season_2004')).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
