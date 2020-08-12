import {SET_ALERT} from "./index";

export const getAlert = message => {
    return {
        type: SET_ALERT,
        payload: message
    }
}

export const setAlert = message => {
    return (dispatch) => {
        dispatch(getAlert(message))
    }
}