import { SET_CITY_REVISIONS } from '../actions/actionTypes';

const initialState = [
	{"_id":"jakarta,id","_rev":"90-fdasfadsflj28374hksdfkdjsf4jdfsa","cityName":"Jakarta Smog City","isPublic":true},
	{"_id":"jakarta,id","_rev":"86-ae27c437c2c2ab91a92fab7c8ff84b6b","cityName":"Jakarta","isPublic":true}
];

export default(state = initialState, action) => {
	switch(action.type) {
		case 'SET_CITY_REVISIONS':
			return action.payload;
		default:
			return state;
	}
};