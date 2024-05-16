import React, { useState } from 'react';
import { BiSearch, BiCurrentLocation } from 'react-icons/bi';

const Inputs = ({ setQuery, setUnits, units }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city !== "") setQuery({ q: city });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setQuery({ lat: latitude, lon: longitude });
            });
        }
    };

    return (
        <div>
            <div className='flex flex-row justify-center my-6'>
                <div className='flex w-3/4 items-center justify-center space-x-4'>
                    <input
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setCity(e.currentTarget.value)}
                        type="text"
                        placeholder='Search by city...'
                        className='text-gray-600 text-xl p-3 w-full capitalize focus:outline-none shadow-xl rounded-md font-medium placeholder:lowercase'
                    />
                    <BiSearch
                        onClick={handleSearch}
                        size={30}
                        className='cursor-pointer transition ease-out hover:scale-125'
                    />
                    <BiCurrentLocation
                        onClick={handleLocation}
                        size={30}
                        className='cursor-pointer transition ease-out hover:scale-125'
                    />
                </div>
                <div className='flex w-1/4 items-center justify-center'>
                    <button
                        onClick={() => setUnits("metric")}
                        className={`text-2xl font-medium transition ease-out hover:scale-125 ${units === "metric" ? "text-orange-500" : ""}`}
                    >
                        &deg;C
                    </button>
                    <p className='text-2xl font-medium mx-1'>|</p>
                    <button
                        onClick={() => setUnits("imperial")}
                        className={`text-2xl font-medium transition ease-out hover:scale-125 ${units === "imperial" ? "text-orange-500" : ""}`}
                    >
                        &deg;F
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Inputs;
