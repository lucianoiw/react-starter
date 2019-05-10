import { createLogic } from 'redux-logic';

import { API_URL } from '../../utils/request';

/* Types */

export const Types = {
  LOAD: 'pokemons/LOAD',
  LOAD_SUCCESS: 'pokemons/LOAD_SUCCESS',
  LOAD_ERROR: 'pokemons/LOAD_ERROR',
};

/* Models */

const dataModel = data => ({
  name: data.name,
  url: data.url,
});

/* Reducer */

export const initialState = {
  data: [],
  loading: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        loading: true,
      };

    case Types.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.results.map(item => dataModel(item)),
      };

    case Types.LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

/* Action Creators */

export function load() {
  return {
    type: Types.LOAD,
  };
}

export function loadSuccess(payload) {
  return { type: Types.LOAD_SUCCESS, payload };
}

export function loadError(error) {
  return { type: Types.LOAD_ERROR, error };
}

/* Logics */

export const loadLogic = createLogic({
  type: Types.LOAD,
  latest: true,

  async process({ request }, dispatch, done) {
    try {
      const endpoint = `${API_URL}/pokemon`;

      const response = await request(endpoint, {
        method: 'GET',
      });

      dispatch(loadSuccess(response.data));
    } catch (e) {
      dispatch(loadError(e));
    }
    done();
  },
});
