import {
    GET_FORECAST_REQUEST,
    GET_FORECAST_SUCCESS,
    GET_FORECAST_FAILURE
} from "../../actions";

const initialState = {
    loading: false,
    data: {

    },
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FORECAST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_FORECAST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: "",
            };
        case GET_FORECAST_FAILURE:
            return {
                ...state,
                data: {},
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer