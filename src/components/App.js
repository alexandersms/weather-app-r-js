import React from "react";

// Component
import SearchBar from "./Search";
import Weather from "./Weather";



const App = () => {
    return (
        <div className="App flex justify-center pt-6">

            <div className="text-white mb-8 w-128">

                {/* SearchBar Component */}
                <SearchBar title="Taper une ville et appuyer sur entrer"/>

                {/* Loading || Weather Component */}
                <Weather/>
            </div>

        </div>
    )
}

export default App;