import React from "react";

const dateFormat = (timestamp) => {
    const newDate = new Date(timestamp * 1000);
    const days = ["DIM","LUN","MAR","MER","JEU","VEN","SAM"];

    return days[newDate.getDay()]
}

const Forecast = ({ forecast }) => {
    return (
        <div className="future-weather text-sm bg-gray-700 px-6 py-8 overflow-hidden">

                {
                    forecast.list.map((data, index) => (
                        <div className="flex items-center mt-3" key={index}>
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

                    ))
                }

            {/*
                <div className="w-1/6 text-lg text-gray-200">LUN</div>
                <div className="w-4/6 flex items-center">
                    <div>icon</div>
                    <div className="ml-3">Cloudy with chance of showers</div>
                </div>
                <div className="w-1/6 text-right">
                    <div>5°C</div>
                    <div>-5°C</div>
                </div>
            */}

        </div>
    )
}

export default Forecast