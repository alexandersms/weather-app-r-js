import {SET_ERROR} from "./index";

export const getError = message => {
    return {
        type: SET_ERROR,
        payload: message
    }
}

export const setError = message => {
    return (dispatch) => {
        dispatch(getError(message))
    }
}