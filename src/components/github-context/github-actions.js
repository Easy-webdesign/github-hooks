import { CLEAR_USERS, GIT_REPOS, GIT_USER, SEARCH_USERS, SET_LOADING } from '../alert/types';
import axios from 'axios';

const CLIENT_SEC = process.env.REACT_APP_CLIENT_SECRET;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SEC}`
}

export default function actions(state, dispatch){
    
    return {
        search: async function(value){
                this.setLoading();
                const res = await axios.get(withCreds(`https://api.github.com/search/users?q=${value}&`));
                dispatch({
                    type: SEARCH_USERS,
                    payload: res.data.items
                })
            },
        getUser: async function(name){
            console.log(this);
                this.setLoading();

                const res = await axios.get(
                    withCreds(`https://api.github.com/users/${name}?`)
                )
            
                dispatch({
                    type: GIT_USER,
                    payload: res.data
                })
            },
        getRepos: async function(name){
            console.log(this);
                this.setLoading();
                const res = await axios.get(withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`));
                dispatch({
                    type: GIT_REPOS,
                    payload: res.data
                })
            },
        clearUsers: function(){dispatch({type: CLEAR_USERS})},
        setLoading: function(){dispatch({type: SET_LOADING})}
    }
}