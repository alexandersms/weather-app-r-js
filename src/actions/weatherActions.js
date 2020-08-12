import axios from "axios"
import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAILURE
} from "./index";

export const getWeatherRequest = () => {
    return {
        type: GET_WEATHER_REQUEST,
    }
}

export const getWeatherSuccess = data => {
    return {
        type: GET_WEATHER_SUCCESS,
        payload: data
    }
}

export const getWeatherFailure = error => {
    return {
        type: GET_WEATHER_FAILURE,
        payload: error
    }
}

export const fetchWeather = (city) => {
    return async (dispatch) => {

        dispatch(getWeatherRequest);

        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=fr`)
            .then(response => {
                const data = response.data;
                dispatch(getWeatherSuccess(data));
            })
            .catch(error => {
                let errorMsg = error.message;
                if (error.message.includes("400")) {
                    errorMsg = "Entrer une ville s'il vous plaît"
                } else if (error.message.includes("404")) {
                    errorMsg = "Ville non trouvée"
                }
                dispatch(getWeatherFailure(errorMsg))
            });

    };
};

