import {
    GET_FORECAST_REQUEST,
    GET_FORECAST_SUCCESS,
    GET_FORECAST_FAILURE, SET_LOADING
} from "../../actions";

const initialState = {
    loading: Boolean,
    data: {
        city: {
            id: Number,
            name: String,
            coord: {
                lon: Number,
                lat: Number
            },
            country: String,
            population: Number,
            timezone: Number
        },
        cod: String,
        message: Number,
        cnt: Number,
        list: [{
            dt: Number,
            sunrise: Number,
            sunset: Number,
            temp: {
                day: Number,
                min:Number,
                max: Number,
                night: Number,
                eve: Number,
                morn: Number
            },
            feels_like: {
                day: Number,
                night: Number,
                eve: Number,
                morn: Number
            },
            pressure: Number,
            humidity: Number,
            weather: [{
                id: Number,
                main: String,
                description: String,
                icon: String
            }],
            speed: Number,
            deg: Number,
            clouds: Number,
            pop: Number,
            rain: Number
        }]
    },
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FORECAST_REQUEST:
            return {
                ...state,
                loading: false,
            };
        case GET_FORECAST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: "",
            };
        case GET_FORECAST_FAILURE:
            return {
                ...state,
                data: {},
                error: action.payload,
                loading: true
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}

export default reducer