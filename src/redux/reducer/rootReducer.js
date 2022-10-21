import { combineReducers } from "redux"
import { usersReducer } from "./usersReducer"


export const rootReducer = combineReducers({
    usersReducer
})
// const initialState = {
//     users: []
// }
// export function rootReducer (state = initialState, action) {
//     if (action.type === "CREATE_USER") {
//         return {...state, users: [...state.users, action.payload]}
//     } else if (action.type === "CLEAR") {
//         return {...state, users: []}
//     }
//     return state;
// }