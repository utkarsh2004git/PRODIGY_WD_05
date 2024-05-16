import React from 'react'

const TimeAndLocation = ({weather:{formattedLocalTime,name,country}}) => {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
        <p className='text-xl font-extralight'>
            {formattedLocalTime}
        </p>
        </div>
        <div className='flex items-center justify-center my-3 '>
            <p className='text-3xl font-medium border-b-2 shadow-lg '>{name} , {country}</p>
        </div>
    </div>
  )
}

export default TimeAndLocation