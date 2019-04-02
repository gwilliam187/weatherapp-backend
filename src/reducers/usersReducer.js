import { SET_USERS } from '../actions/actionTypes';

const initialState = ['steven_klarens', 'wowowi', 'sandiaga_uno'];

export default(state = initialState, action) => {
	switch(action.type) {
		case SET_USERS:
			return action.payload;
		default:
			return state;
	}
}