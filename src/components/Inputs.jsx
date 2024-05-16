import React from 'react'
import {BiSearch , BiCurrentLocation} from 'react-icons/bi'

const Inputs = () => {
  return (
    <div>
        <div className='flex flex-row justify-center my-6'>
            <div className='flex w-3/4 items-center justify-center space-x-4'>
                <input type="text" placeholder='Search by city...' 
                className='text-gray-600 text-xl  p-3 w-full capitalize focus:outline-none shadow-xl shadow-blue-800 rounded-md 
                font-medium placeholder:lowercase'
                />
                <BiSearch 
                size={30}
                className='cursor-pointer transition ease-out hover:scale-125'
                />
                <BiCurrentLocation 
                size={30}
                className='cursor-pointer transition ease-out hover:scale-125'
                />
            </div>
            <div className='flex w-1/4 items-center justify-center'>
                <button className='text-2xl font-medium transition ease-out hover:scale-125'>&deg;C</button>
                <p className='text-2xl font-medium mx-1'>|</p>
                <button className='text-2xl font-medium transition ease-out hover:scale-125'>&deg;F</button>
            </div>
        </div>
    </div>
  )
}

export default Inputs;