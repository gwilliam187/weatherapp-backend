import { SET_CITIES } from '../actions/actionTypes';

const initialState = [
	{_id: 'berlin,de', cityName: 'Berlin'},
	{_id: 'jakarta,id', cityName: 'Jakarta'}
];

export default(state = initialState, action) => {
	switch(action.type) {
		case SET_CITIES:
			return action.payload;
		default:
			return state;
	}	
};