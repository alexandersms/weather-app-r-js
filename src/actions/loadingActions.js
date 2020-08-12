import {SET_LOADING} from "./index";

export const getLoading = message => {
    return {
        type: SET_LOADING
    }
}

export const setLoading = () => {
    return (dispatch) => {
        dispatch(getLoading)
    }
}