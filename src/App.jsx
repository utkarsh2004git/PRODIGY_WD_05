import React, { useEffect, useState } from 'react'

import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherServices';
import Footer from './services/weatherServices';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [query, setQuery] = useState({ q: 'tokyo' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)



  const getWeather = async () => {

    const message = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${message.charAt(0).toUpperCase() + message.slice(1)}`)

    const data = await getFormattedWeatherData({ ...query, units })
      .then(data => { setWeather(data) })
  };

  useEffect(() => {
    getWeather();
  }, [query, units])


  const formatBackground = () => {
    return "from-cyan-600 to-blue-700"
  }


  return (
    <>
      <div className={`mx-auto w-fit  sm:max-w-screen-lg  sm:mt-4 py-5 px-10 sm:px-32 bg-gradient-to-br   text-white ${formatBackground()}`}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} setUnits={setUnits} units={units} />
        {
          weather && (
            <>
              <TimeAndLocation weather={weather} />
              <TempAndDetails weather={weather} units={units} />
              <Forecast title='3 hours step forecast' data={weather.hourly} />
              <Forecast title='Daily forecast' data={weather.daily} />

            </>
          )
        }

        <ToastContainer autoClose={1000} hideProgressBar={true} theme='colored' />

      </div>

      <div className=''>
  <div className={`w-[33rem] sm:w-auto sm:max-w-screen-lg sm:mx-auto m-0 sm:mt-4 py-5 sm:px-32 text-white bg-gray-800`}>
    <div className='flex flex-col sm:flex-row justify-center items-center gap-2 text-center sm:text-left'>
      &copy; All Rights reserved 2024. This app is developed by <span className='font-bold text-white'>Utkarsh Shahare</span>
    </div>
    <div className='flex  sm:flex-row justify-center items-center gap-2 text-center sm:text-left mt-2'>
      API: <a className='text-blue-800 font-bold underline' target='_blank' href="https://openweathermap.org/api">OpenWeatherMap</a>
    </div>
  </div>
</div>



    </>
  )
}

export default App;