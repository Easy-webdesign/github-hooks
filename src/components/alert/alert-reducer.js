import {fn} from './functions';

export const alertReducer = (state, action) => {
    return fn(state, action)[action.type];
};
