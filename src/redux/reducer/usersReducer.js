
const initialState = {
     users: []
}
 export function usersReducer (state = initialState, action) {
     // if (action.type === "CREATE_USER") {
     //     return {...state, users: [...state.users, action.payload]}
     // } else if (action.type === "CLEAR") {
     //     return {...state, users: []}
     // }
     // return state;
     switch (action.type) {
         case "CREATE_USER":
             return {...state, users: [...state.users, action.payload]}
         case "CLEAR":
             return {...state, users: []}
         default: return state
     }
}