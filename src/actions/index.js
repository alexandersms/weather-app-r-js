// Fetching current weather
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_REQUEST = "GET_WEATHER_REQUEST";
export const GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE";

// Fetching Forecast weather
export const GET_FORECAST_SUCCESS = "GET_FORECAST_SUCCESS";
export const GET_FORECAST_REQUEST = "GET_FORECAST_REQUEST";
export const GET_FORECAST_FAILURE = "GET_FORECAST_FAILURE";

// Set ALERT, ERROR ET LOADING
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

/*
export const GET_FORECAST = "GET_FORECAST";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";
 */

/*
export const Weather = {
    id: Number,
    main: String,
    description: String,
    icon: String
}

export const WeatherData = {
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
    weather: {...Weather},
    wind: {
        speed: Number,
        deg: Number
    }
}

export const WeatherError = {
    cod: String,
    message: String
}

export const WeatherState = {
    data: WeatherData | null,
    loading: Boolean,
    error: String
}

export const ForecastData = {
    city: {
        id: Number,
        name: String,
        coord: {
            lon: Number,
            lat: Number
        }
    },
    cod: String,
    message: Number,
    cnt: Number,
    list: []
}

export const ForecastError = {
    cod: String,
    message: String
}

export const ForecastState = {
    data: ForecastData | null,
    loading: Boolean,
    error: String
}

export const GetWeatherAction = {
    type: GET_WEATHER,
    payload: WeatherData
}

export const GetForecastAction = {
    type: GET_FORECAST,
    payload: ForecastData
}

export const SetLoadingAction = {
    type: SET_LOADING
}

export const SetErrorAction = {
    type: SET_ERROR,
    payload: String
}

export const WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;
export const ForecastAction = GetForecastAction | SetLoadingAction | SetErrorAction;

export const AlertAction = (message) => {
    return {
        type: SET_ALERT,
        payload: message
    }
}

export const AlertState = {
    message: String
}

 */