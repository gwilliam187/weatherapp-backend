const initialState = ['steven_klarens', 'wowowi'];

export default(state=[], action) => {
	switch(action.type){
		case "LOAD_USERS": return [...state, action.payload];
		default: return initialState;
	}
}