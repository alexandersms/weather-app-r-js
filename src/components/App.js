import React from "react";
import {useSelector} from "react-redux";

// Component
import SearchBar from "./Search";
import Weather from "./Weather";


const App = () => {
    const weatherData = useSelector(state => state.weather.data);
    const loading = useSelector(state => state.weather.loading);

    return (
        <div className="App flex justify-center pt-6">

            <div className="text-white mb-8 w-128">

                {/* SearchBar Component */}
                <SearchBar title="Taper une ville et appuyer sur entrer"/>

                {/* Loading || Weather Component */}
                {console.log(loading)}

                {
                    loading ? null:
                        weatherData && <Weather data={weatherData}/>
                }
            </div>

        </div>
    )
}

export default App;