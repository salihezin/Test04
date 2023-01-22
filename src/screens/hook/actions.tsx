import {
    SET_PASSWORD,
    SET_USER_NAME
} from './types'

export const setUsername = (username: string) => (dispatch:any) => {
    dispatch({
        type: SET_USER_NAME,
        payload: username,
    });
};

export const setPassword = (password: string) => (dispatch:any) => {
    dispatch({
        type: SET_PASSWORD,
        payload: password,
    });
};