import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAILURE, SET_LOADING
} from "../../actions";


const initialState = {
    loading: Boolean,
    data: {
        base: String,
        clouds:  {
            all: Number
        },
        cod: Number,
        coord: {
            lon: Number,
            lat: Number
        },
        dt: Number,
        id: Number,
        main: {
            feels_like: Number,
            humidity: Number,
            pressure: Number,
            temp: Number,
            temp_max: Number,
            temp_min: Number
        },
        name: String,
        sys: {
            type: Number,
            id: Number,
            country: String,
            sunrise: Number,
            sunset: Number
        },
        timezone: Number,
        visibility: Number,
        weather: [{
            id: Number,
            main: String,
            description: String,
            icon: String
        }],
        wind: {
            speed: Number,
            deg: Number
        }
    },
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER_REQUEST:
            return {
                ...state,
                loading: false,
            };
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: "",
            };
        case GET_WEATHER_FAILURE:
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