import React from 'react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';

const App = () => {
  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-600 text-white font-bold'>
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
    </div>
  )
}

export default App;