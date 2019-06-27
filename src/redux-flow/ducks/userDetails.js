import { createLogic } from 'redux-logic';

import { API_URL } from '@Utils/request';

/* Types */

export const Types = {
  LOAD: 'userDetails/LOAD',
  LOAD_SUCCESS: 'userDetails/LOAD_SUCCESS',
  LOAD_ERROR: 'userDetails/LOAD_ERROR',
  CLEAR: 'userDetails/CLEAR',
};

/* Models */

const dataModel = data => ({
  id: data.id,
  name: `${data.first_name} ${data.last_name}`,
  email: data.email,
  avatar: data.avatar,
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
        data: dataModel(action.payload.data),
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

export function load(id) {
  return {
    type: Types.LOAD,
    id,
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
      const endpoint = `${API_URL}/users/${action.id}`;

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
