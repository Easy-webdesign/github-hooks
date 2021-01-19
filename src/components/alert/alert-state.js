import React, { useReducer } from 'react';
import { AlertProvider } from './alert-context';
import { alertReducer } from './alert-reducer';
import './index.scss';
import { HIDE_ALERT, SHOW_ALERT } from './types';

const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, null);

    const hide = () => dispatch({type: HIDE_ALERT});
    const show = (text, type = 'secondary') => {
        dispatch({type: SHOW_ALERT, payload: {text, type}})
    };
    return <AlertProvider value={{hide, show, alert: state}}>{children}</AlertProvider>
};

export default AlertState;