import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import selectedUserReducer from './selectedUserReducer';
// import citiesReducer from './citiesReducer';
import cityRevsReducer from './cityRevsReducer';
import cityReducer from './cityReducer'

export default combineReducers({
	users: usersReducer,
	selectedUser: selectedUserReducer,
	userCities: cityReducer,
	// cities: citiesReducer,
	cityRevs: cityRevsReducer
});