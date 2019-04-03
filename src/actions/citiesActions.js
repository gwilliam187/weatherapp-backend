import { ADD_CITY, SET_USER_CITY, REMOVE_CITY } from './actionTypes';

export const setCities = cities => {
	return {
		type: SET_USER_CITY,
		payload: cities
	};
};

export const addCity = city =>{
	return {
		type: ADD_CITY,
		payload: city
	}
}

export const removeCity = cityRef => async(dispatch, getState)=> {
	let theMainCityList = getState().userCities;
	console.log(theMainCityList);
	let theUpdatedCityList = Array();
	theMainCityList.rows.map((city)=>{
		if	(city.id!==cityRef){
			theUpdatedCityList.push(city)
		}
	})
	console.log(theUpdatedCityList)
	const finalUpdatedCityList = {
		total_rows: theUpdatedCityList.length,
		rows: theUpdatedCityList
	}
	dispatch({type: REMOVE_CITY, payload: finalUpdatedCityList})
}