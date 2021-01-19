import { CLEAR_USERS, GIT_REPOS, GIT_USER, SEARCH_USERS, SET_LOADING } from '../alert/types';



export const fn = {
        [SEARCH_USERS]: (state, {payload}) =>  ({...state, users: payload, loading: false}),
        [GIT_REPOS] : (state, {payload}) =>({...state, repos: payload, loading: false}),
        [GIT_USER] : (state, {payload}) =>({...state, user: payload, loading: false}),
        [SET_LOADING] : (state) =>({...state, loading: true}),
        [CLEAR_USERS] : (state, {payload}) =>({...state, users: []}),
    }
//     if(payload){
//         return {
//             [SEARCH_USERS] : {...state, users: payload, loading: false} ,
//             [GIT_REPOS] : {...state, repos: payload, loading: false},
//             [GIT_USER] : {...state, user: payload, loading: false},
//         }
//     } else {
//         return {
//             [SET_LOADING] : {...state, loading: true},
//             [CLEAR_USERS] : {...state, users: []},
//         }
//     }
// }