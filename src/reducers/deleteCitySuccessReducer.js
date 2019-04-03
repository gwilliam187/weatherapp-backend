import { DELETE_CITY_SUCCESS , RESET_DELETE_CITY} from '../actions/actionTypes';

export default(state = 0, action) => {
	switch(action.type) {
        case RESET_DELETE_CITY:
            return 0;
		case DELETE_CITY_SUCCESS:
			return 1;
		default:
			return state;
	}
};