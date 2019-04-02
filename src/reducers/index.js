import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import selectedUserReducer from './selectedUserReducer';
import citiesReducer from './citiesReducer';

export default combineReducers({
	users: usersReducer,
	selectedUser: selectedUserReducer,
	cities: citiesReducer
});