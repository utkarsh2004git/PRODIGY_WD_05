import React, { useEffect, useState } from 'react'

import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherServices';

const App = () => {

  const [query, setQuery] = useState({ q: 'tokyo' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)



  const getWeather = async () => {
    const data = await getFormattedWeatherData({...query,units})
      .then(data => { setWeather(data) })
  };

  useEffect(() => {
    getWeather();
  }, [query, units])

  return (
    <div className='mx-auto max-w-screen-lg  sm:mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-600 text-white '>
      <TopButtons />
      <Inputs />
      {
        weather && (
          <>
            <TimeAndLocation weather={weather}/>
            <TempAndDetails weather={weather} />
            <Forecast />
            <Forecast />
          </>
        )
      }

    </div>
  )
}

export default App;