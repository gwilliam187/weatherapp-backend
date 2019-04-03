import {SET_USER_CITY, REMOVE_CITY, UNSELECT_USER , ADD_CITY, SELECT_USER} from '../actions/actionTypes';

export default(state=[], action)=>{
    switch  (action.type){
        case ADD_CITY: return [...state, state.push(action.payload)];
        case SELECT_USER : return [];
        case SET_USER_CITY : return action.payload;
        case REMOVE_CITY: 
            let newState = Array();
            state.rows.map((city)=>{
                if  (city.id!==action.payload){
                    newState.push(city)
                }
            })
            return ({
                total_rows : newState.length,
                rows: newState
            })
        
        default: return state;
    }
}