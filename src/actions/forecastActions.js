import axios from "axios"
import {
    GET_FORECAST_REQUEST,
    GET_FORECAST_SUCCESS,
    GET_FORECAST_FAILURE
} from "./index";

export const getForecastRequest = () => {
    return {
        type: GET_FORECAST_REQUEST,
    }
}

export const getForecastSuccess = data => {
    return {
        type: GET_FORECAST_SUCCESS,
        payload: data
    }
}

export const getForecastFailure = error => {
    return {
        type: GET_FORECAST_FAILURE
    }
}

export const fetchForecast = (city) => {
    return (dispatch) => {

        dispatch(getForecastRequest);

        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&lang=fr&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                const data = response.data;
                dispatch(getForecastSuccess(data));
            })
            .catch(error => {
                let errorMsg = error.message;
                if (error.message.includes("400")) {
                    errorMsg = "Entrer une ville s'il vous plaît"
                } else if (error.message.includes("404")) {
                    errorMsg = "Ville non trouvée"
                }
                dispatch(getForecastFailure(errorMsg))
            });
    };
};

