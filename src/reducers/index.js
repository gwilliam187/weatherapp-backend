import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import selectedUserReducer from './selectedUserReducer';
import userCityReducer from './userCityReducer'

export default combineReducers({
	users: usersReducer,
	selectedUser: selectedUserReducer,
	userCities: userCityReducer
});