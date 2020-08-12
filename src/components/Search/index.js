import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

// Actions
import {fetchWeather} from "../../actions/weatherActions";
import { fetchForecast } from "../../actions/forecastActions";

import {setAlert} from "../../actions/alertActions";
import {setError} from "../../actions/errorActions";
import {setLoading} from "../../actions/loadingActions";

// Importation du composant Alert
import Alert from "../Alert";


const SearchBar = ({title}) => {
    const dispatch = useDispatch();

    const error = useSelector(state => state.weather.error);
    const alertMsg = useSelector(state => state.alert.message)

    const [city, setCity] = useState('')

    const handleChange = e => {
        setCity(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (city.trim() === "") {
            return dispatch(setAlert("La ville est obligatoire !!"))
        } else  {
            dispatch(setLoading());
            dispatch(fetchWeather(city))
            dispatch(fetchForecast(city))
            setCity('')
        }

    }

    return (
        <div className="places-input text-sm text-gray-800">
            <form onSubmit={handleSubmit}>
                <input
                    type="search"
                    className="w-full p-2 rounded-lg"
                    placeholder={title}
                    value={city}
                    onChange={handleChange}
                />
                <button className="w-full bg-gray-700 mt-2 text-white rounded-lg p-2">Rechercher</button>
            </form>

            {
                alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))}/>
            }
            {
                error && <Alert message={error} onClose={() => dispatch(setError(''))}/>
            }

        </div>
    )
}

export default SearchBar;