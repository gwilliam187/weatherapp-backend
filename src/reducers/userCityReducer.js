import {SET_USER_CITY, REMOVE_CITY, RESET_USER_CITY, ADD_CITY} from '../actions/actionTypes';

export default(state=[], action)=>{
    switch  (action.type){
        case ADD_CITY: return [...state, state.push(action.payload)];
        case SET_USER_CITY : return action.payload;
        case REMOVE_CITY: return action.payload;
        case RESET_USER_CITY: return [];
        default: return state;
    }
}