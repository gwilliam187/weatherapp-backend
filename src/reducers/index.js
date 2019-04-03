import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import selectedUserReducer from './selectedUserReducer';
// import citiesReducer from './citiesReducer';
import cityRevsReducer from './cityRevsReducer';
import userCityReducer from './userCityReducer'
import deleteCitySuccessReducer from './deleteCitySuccessReducer';

export default combineReducers({
	users: usersReducer,
	selectedUser: selectedUserReducer,
	userCities: userCityReducer,
	cityDeleted : deleteCitySuccessReducer,
	// cities: citiesReducer,
	cityRevs: cityRevsReducer,
	userCities: userCityReducer
});