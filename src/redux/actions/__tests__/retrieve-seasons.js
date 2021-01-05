import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { RETRIEVE_SEASONS_SUCCESS } from '../../constants';
import retrieveSeasons from '../retrieve-seasons';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('Should produce a success object', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  fetchMock.get('http://localhost:5000/api/v1/footballers/seasons', {
    body: { seasons: [2004, 2005, 2006] },
    headers: { 'content-type': 'application/json' },
  });

  const expectedActions = [
    { type: RETRIEVE_SEASONS_SUCCESS, payload: { data: { seasons: [2004, 2005, 2006] } } },
  ];

  const store = mockStore({ seasons: [] });
  return store.dispatch(retrieveSeasons()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
