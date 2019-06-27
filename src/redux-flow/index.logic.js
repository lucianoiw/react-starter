import { loadLogic as loadUsers } from '@Ducks/users';
import { loadLogic as loadUserDetails } from '@Ducks/userDetails';

export default [
  loadUsers,
  loadUserDetails,
];
