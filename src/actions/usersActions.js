import { SET_USERS } from './actionTypes';

export const setUsers = users => {
	return {
		type: SET_USERS,
		payload: users
	};
};