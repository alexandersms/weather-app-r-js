import React from "react";

const SearchBar = ({ title }) => {

    return (
        <div className="places-input text-sm text-gray-800">
            <form>
                <input
                    className="w-full rounded-lg p-2"
                    type="text"
                    placeholder={ title }
                    value=""
                />
            </form>
        </div>
    )
}

export default SearchBar;