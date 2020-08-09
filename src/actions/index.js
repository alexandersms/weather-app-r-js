import {types} from "./types";
import axios from "axios";

export const fetchWeather = () => async (dispatch) => {
    await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => {
            dispatch({
                type: types.GET_WEATHER,
                payload: res.data
            });
        })
        .catch(error => console.log(error))
};