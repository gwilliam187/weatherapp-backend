import { SET_CITIES } from './actionTypes';

export const setCities = cities => {
	return {
		type: SET_CITIES,
		payload: cities
	};
};