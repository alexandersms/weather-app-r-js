import React from "react";
import Forecast from "../Forecast";
import {useSelector} from "react-redux";

const Weather = ({ data }) => {

    const forecastData = useSelector(state => state.forecast.data.list);
    const loading = useSelector(state => state.forecast.loading);

    return (

        <div className="weather-container font-sans bg-gray-800 mt-4 rounded-lg shadow-lg overflow-hidden w-128">

            {/* Current weather */}
            <div className="current-weather flex items-center justify-between px-6 py-8">
                <div className="flex items-center">
                    <div>

                        <div className="text-6xl font-semibold">{Math.round(data.main.temp)}&deg;C</div>
                        <div>{Math.round(data.main.temp_min)}&deg;/{Math.round(data.main.temp_max)}&deg; Ressenti {Math.round(data.main.feels_like)}&deg;C</div>
                    </div>
                    <div className="mx-8">
                        <div className="font-semibold">{data.weather[0].description}</div>
                        <div>{data.name}, {data.sys.country}</div>
                    </div>
                </div>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon-temp"/>
                </div>
            </div>

            {/* Loading || Future Weather */}
            {
                loading ? null:
                    forecastData && <Forecast forecast={forecastData}/>
            }

        </div>
    )
}

export default Weather