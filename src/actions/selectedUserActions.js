import { SELECT_USER} from '../actions/actionTypes';

export const selectUser = user => {
	return {
		type: SELECT_USER,
		payload: user
	};
};