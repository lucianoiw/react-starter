import { createMockStore } from 'redux-logic-test';

import reducer, {
  Types, load, loadSuccess, loadError, loadLogic, initialState,
} from '../pokemons';

const request = jest.fn();
const logic = [loadLogic];
const injectedDeps = {
  request,
};

const store = createMockStore({
  initialState,
  reducer,
  logic,
  injectedDeps,
});

// Actions
describe('actions', () => {
  it('should create a load action when load() is called', () => {
    expect(load()).toEqual({ type: Types.LOAD });
  });

  it('should create a success action when loadSuccess(payload) is called', () => {
    expect(loadSuccess({ id: 1 })).toEqual({ type: Types.LOAD_SUCCESS, payload: { id: 1 } });
  });

  it('should create a error action when loadError(error) is called', () => {
    expect(loadError('not found')).toEqual({ type: Types.LOAD_ERROR, error: 'not found' });
  });
});

// Reducers
describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: [],
      loading: false,
      error: false,
    });
  });

  it('should handle LOAD_SUCCESS', () => {
    expect(
      reducer(
        {},
        loadSuccess({
          results: [
            {
              name: 'one',
              url: 'http://localhost',
            },
          ],
        }),
      ),
    ).toEqual({
      loading: false,
      data: [
        {
          name: 'one',
          url: 'http://localhost',
        },
      ],
    });

    expect(
      reducer(
        {
          done: true,
        },
        loadSuccess({
          results: [
            {
              name: 'one',
              url: 'http://localhost',
            },
          ],
        }),
      ),
    ).toEqual({
      done: true,
      loading: false,
      data: [
        {
          name: 'one',
          url: 'http://localhost',
        },
      ],
    });
  });

  it('should handle LOAD_ERROR', () => {
    expect(
      reducer(
        {
          loading: true,
        },
        loadError({
          message: 'not found',
        }),
      ),
    ).toEqual({
      loading: false,
      error: {
        message: 'not found',
      },
    });
  });
});

// Logics
describe('logics', () => {
  it('should trigger a request to the API when load() is called on dispatch', () => {
    store.dispatch(load());
    store.whenComplete(() => {
      expect(request).toHaveBeenCalledTimes(1);
    });
  });
});
