import React, {useState} from "react";

// Format Date
const dateFormat = (timestamp) => {
    const newDate = new Date(timestamp * 1000);
    const days = ["DIM","LUN","MAR","MER","JEU","VEN","SAM"];

    return days[newDate.getDay()]
}

const Forecast = ({ forecast }) => {

    const [state, setState] = useState({forecast, data: null, isShow: false});

    // Toggle Details Forecast
    const toggleDetailsForecast = (index) => {
        setState({ ...state, data: state.forecast[index] })
    }

    const toggleDetailsForecastStyles = (index) => {
        if (state.forecast[index] === state.data) {
            return "visible";
        } else {
            return "hidden";
        }
    }

    return (
        <div className="future-weather text-sm bg-gray-700 px-6 py-8 overflow-hidden">

                {
                    state.forecast.map((data, index) => (
                        <div key={index}>
                            <div onClick={() => toggleDetailsForecast(index)} className="flex items-center cursor-pointer px-3 py-1 hover:bg-gray-600 hover:opacity-75 hover:shadow">
                                <div className="w-1/6 text-sm text-gray-200">{dateFormat(data.dt)}</div>
                                <div className="w-4/6 flex items-center">
                                    <div style={{ width: "65px" }}>
                                        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="ico-meteo"/>
                                    </div>
                                    <div className="ml-3">{data.weather[0].description}</div>
                                </div>
                                <div className="w-1/6 text-right">
                                    <div>{Math.round(data.temp.min)}&deg;</div>
                                    <div>{Math.round(data.temp.max)}&deg;</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between bg-gray-800 px-2">
                                <div className={toggleDetailsForecastStyles(index)}>
                                    <div className="text-sm text-blue-200 float-left">
                                        <div>Matin : <strong>{Math.round(data.temp.morn)}</strong>&deg; </div>
                                        <div>Jour  : <strong>{Math.round(data.temp.day)}</strong>&deg; </div>
                                        <div>Soir  : <strong>{Math.round(data.temp.eve)}</strong>&deg; </div>
                                        <div>Nuit  : <strong>{Math.round(data.temp.night)}</strong>&deg; </div>
                                    </div>

                                    <div className="text-sm text-blue-400 mx-16 float-right">
                                        <div>Pression  : <strong>{Math.round(data.pressure)}</strong></div>
                                        <div>Humidité  : <strong>{Math.round(data.humidity)}</strong>% </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))
                }

        </div>
    )
}

export default Forecast