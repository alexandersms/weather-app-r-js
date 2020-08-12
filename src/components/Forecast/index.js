import React from "react";

const Forecast = () => {
    return (
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
    )
}

export default Forecast