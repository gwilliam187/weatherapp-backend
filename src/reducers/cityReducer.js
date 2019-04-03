import {SET_USER_CITY, REMOVE_CITY, UNSELECT_USER , ADD_CITY, SELECT_USER} from '../actions/actionTypes';

/*
    City Obj = {
        _id: xxx,
        cityName: xxx
        isPublic: true
    }
*/

export default(state=[], action)=>{
    switch  (action.type){
        case ADD_CITY: 
            let newRow = state.rows;
            newRow.push(action.payload);
            return ({
                total_rows : newRow.length,
                rows: newRow
            })
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