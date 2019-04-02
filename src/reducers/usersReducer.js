import { SET_USERS } from '../actions/actionTypes';

export default(state = [], action) => {
	switch(action.type) {
		case SET_USERS:
			return action.payload;
		default:
			return state;
	}
}