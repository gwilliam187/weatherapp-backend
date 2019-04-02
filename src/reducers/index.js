import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import selectedUserReducer from './selectedUserReducer';
// import citiesReducer from './citiesReducer';
import cityRevsReducer from './cityRevsReducer';
import userCityReducer from './userCityReducer'

export default combineReducers({
	users: usersReducer,
	selectedUser: selectedUserReducer,
	// cities: citiesReducer,
	cityRevs: cityRevsReducer,
	userCities: userCityReducer
});