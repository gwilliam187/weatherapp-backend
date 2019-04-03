import { SET_USERS, ADD_USER } from '../actions/actionTypes';

const initialState = ['steven_klarens', 'wowowi', 'sandiaga_uno'];

export default(state = initialState, action) => {
	switch(action.type) {
		case ADD_USER:
			return [...state, action.payload]
		case SET_USERS:
			return action.payload;
		default:
			return state;
	}
}