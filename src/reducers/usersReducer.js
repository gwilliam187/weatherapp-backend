import { SET_USERS, ADD_USER, REMOVE_USER } from '../actions/actionTypes';

export default(state = [], action) => {
	switch(action.type) {
		case ADD_USER:
			return [...state, action.payload]
		case REMOVE_USER:
			let newState = Array();
			state.map((user)=>{
				if	(user!==action.payload){
					newState.push(user)
				}
			})
			return newState;
		case SET_USERS:
			return action.payload;
		default:
			return state;
	}
}