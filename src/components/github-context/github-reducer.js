import {fn} from './handlers';

export const gitHubReducer = (state, action) => {

    return fn[action.type](state, action);
}