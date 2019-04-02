import {SET_USER_CITY, RESET_USER_CITY} from '../actions/actionTypes';

export default(state=[], action)=>{
    switch  (action.type){
        case SET_USER_CITY : return action.payload;
        case RESET_USER_CITY: return [];
        default: return state;
    }
}