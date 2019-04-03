import { SET_USERS, ADD_USER } from '../actions/actionTypes';

export default(state = [], action) => {
	switch(action.type) {
		case ADD_USER:
			return [...state, action.payload]
		case SET_USERS:
			return action.payload;
		default:
			return state;
	}
}