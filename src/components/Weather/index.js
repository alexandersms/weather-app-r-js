import React from "react";

const Weather = () => {
    return (
        <div className="weather-container font-sans bg-gray-800 mt-4 rounded-lg shadow-lg overflow-hidden w-128">

            {/* Current weather */}
            <div className="current-weather flex items-center justify-between px-6 py-8">
                <div className="flex items-center">
                    <div>
                        <div className="text-6xl font-semibold">10&deg;C</div>
                        <div>10&deg;C/15&deg;C Ressenti 12&deg;C</div>
                    </div>
                    <div className="mx-8">
                        <div className="font-semibold">Fort pluie</div>
                        <div>Paris, FR</div>
                    </div>
                </div>
                <div>
                    <img src="" alt="icon-temp"/>
                </div>
            </div>

            {/* Future Weather */}
            <div className="future-weather text-sm bg-gray-700 px-6 py-8 overflow-hidden">

                <div className="flex items-center">
                    <div className="w-1/6 text-lg text-gray-200">LUN</div>
                    <div className="w-4/6 flex items-center">
                        <div>icon</div>
                        <div className="ml-3">Cloudy with chance of showers</div>
                    </div>
                    <div className="w-1/6 text-right">
                        <div>5°C</div>
                        <div>-5°C</div>
                    </div>
                </div>

                <div className="flex items-center mt-8">
                    <div className="w-1/6 text-lg text-gray-200">LUN</div>
                    <div className="w-4/6 flex items-center">
                        <div>icon</div>
                        <div className="ml-3">Cloudy with chance of showers</div>
                    </div>
                    <div className="w-1/6 text-right">
                        <div>5°C</div>
                        <div>-5°C</div>
                    </div>
                </div>

                <div className="flex items-center mt-8">
                    <div className="w-1/6 text-lg text-gray-200">LUN</div>
                    <div className="w-4/6 flex items-center">
                        <div>icon</div>
                        <div className="ml-3">Cloudy with chance of showers</div>
                    </div>
                    <div className="w-1/6 text-right">
                        <div>5°C</div>
                        <div>-5°C</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Weather