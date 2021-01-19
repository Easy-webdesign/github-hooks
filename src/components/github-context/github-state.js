import React, { useReducer } from 'react';
import actions from './github-actions';
import { GitHubContext } from './github-context';
import { gitHubReducer } from './github-reducer';

const GithubState = p => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    };

    const [state, dispatch] = useReducer(gitHubReducer, initialState);
    const act = actions(state, dispatch);

    return <GitHubContext.Provider value={{...act, ...state}}>{p.children}</GitHubContext.Provider>
};

export default GithubState;