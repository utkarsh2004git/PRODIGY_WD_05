import React from 'react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';

const App = () => {
  return (
    <div className='mx-auto max-w-screen-lg  sm:mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-600 text-white '>
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TempAndDetails />
    </div>
  )
}

export default App;