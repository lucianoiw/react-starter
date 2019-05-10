import { createLogic } from 'redux-logic';

import { API_URL } from '../../utils/request';

/* Types */

export const Types = {
  LOAD: 'pokemonDetails/LOAD',
  LOAD_SUCCESS: 'pokemonDetails/LOAD_SUCCESS',
  LOAD_ERROR: 'pokemonDetails/LOAD_ERROR',
  CLEAR: 'pokemonDetails/CLEAR',
};

/* Models */

const dataModel = data => ({
  name: data.name,
  abilities: data.abilities,
  sprites: data.sprites,
});

/* Reducer */

export const initialState = {
  data: {},
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
        data: dataModel(action.payload),
      };

    case Types.LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case Types.CLEAR:
      return {
        ...state,
        data: {},
      };

    default:
      return state;
  }
}

/* Action Creators */

export function load(slug) {
  return {
    type: Types.LOAD,
    slug,
  };
}

export function loadSuccess(payload) {
  return { type: Types.LOAD_SUCCESS, payload };
}

export function loadError(error) {
  return { type: Types.LOAD_ERROR, error };
}

export function clear() {
  return { type: Types.CLEAR };
}

/* Logics */

export const loadLogic = createLogic({
  type: Types.LOAD,
  latest: true,

  async process({ request, action }, dispatch, done) {
    try {
      const endpoint = `${API_URL}/pokemon/${action.slug}`;

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
