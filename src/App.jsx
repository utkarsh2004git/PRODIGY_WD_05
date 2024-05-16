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


  const formatBackground=()=>{
      return "from-cyan-600 to-blue-700"
  }


  return (
    <div className={`mx-auto max-w-screen-lg  sm:mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400  text-white ${formatBackground()}`}>
      <TopButtons  setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits} units={units} />
      {
        weather && (
          <>
            <TimeAndLocation weather={weather}/>
            <TempAndDetails weather={weather}  units={units}/>
            <Forecast title='3 hours step forecast' data={weather.hourly} />
            <Forecast title='Daily forecast' data={weather.daily} />

          </>
        )
      }

    </div>
  )
}

export default App;