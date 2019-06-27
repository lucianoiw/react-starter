/* Types */

export const Types = {
  LOGIN: 'account/LOGIN',
  LOGOUT: 'account/LOGOUT',
};

/* Reducer */

export const initialState = {
  logged: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state,
        logged: true,
      };

    case Types.LOGOUT:
      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
}

/* Action Creators */

export function login() {
  return {
    type: Types.LOGIN,
  };
}

export function logout() {
  return {
    type: Types.LOGOUT,
  };
}
