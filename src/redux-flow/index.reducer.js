import { combineReducers } from 'redux';

import users from '@Ducks/users';
import userDetails from '@Ducks/userDetails';
import account from '@Ducks/account';

const reducers = combineReducers({
  users,
  userDetails,
  account,
});

export default reducers;
