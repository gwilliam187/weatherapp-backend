import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import selectedUserReducer from './selectedUserReducer';

export default combineReducers({
	users: usersReducer,
	selectedUser: selectedUserReducer
});