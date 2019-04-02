export const loadUsers = (username)=>{
    return{
        type: "LOAD_USERS",
        payload: username
    }
}