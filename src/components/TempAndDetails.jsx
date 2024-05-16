import React from 'react'
import {FaThermometerEmpty} from 'react-icons/fa'
import {BiSolidDropletHalf} from 'react-icons/bi'
import {FiWind} from 'react-icons/fi'
import {GiSunrise,GiSunset} from 'react-icons/gi'
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md'

const TempAndDetails = ({weather:{details,icon,temp,temp_min,temp_max,feels_like,humidity,speed,sunrise,sunset}}) => {

    const verticalDetails=[
        {
            id:1,
            Icon:FaThermometerEmpty,
            title:"Real Feel",
            value:`${feels_like.toFixed()}°`,
        },
        {
            id:2,
            Icon:BiSolidDropletHalf,
            title:"Humidity",
            value:`${humidity.toFixed()}%`,
        },
        {
            id:3,
            Icon:FiWind,
            title:"Wind",
            value:`${speed.toFixed()} km/h`,
        },
    ]
    const horizontalDetails=[
        {
            id:1,
            Icon:GiSunrise,
            title:"Sunrise",
            value:sunrise,
        },
        {
            id:2,
            Icon:GiSunset,
            title:"Sunset",
            value:sunset,
        },
        {
            id:3,
            Icon:MdKeyboardArrowUp,
            title:"High",
            value:`${temp_max.toFixed()}°`,
        },
        {
            id:4,
            Icon:MdKeyboardArrowDown,
            title:"Low",
            value:`${temp_min.toFixed()}°`,
        },
    ]

  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300 font-bold'>
        <p>{details}</p>
        </div>

        <div className='flex items-center justify-between py-3 '> 
            <img
                src={icon}  alt="weather-icon" 
                className='w-20 cursor-pointer'
            />
            <p className='text-5xl cursor-pointer '>{temp.toFixed()}&deg;</p>

            <div className='flex flex-col space-y-3 items-start'>
                {
                    verticalDetails.map(({id,Icon,title,value})=>(

                <div key={id} className='flex font-light text-sm items-center justify-center cursor-pointer hover:scale-95 duration-200'>     
                    <Icon size={18} className='mr-1'/>
                    {title}<span className='font-medium ml-1'>{value}</span>
                </div>
                    ))
                }
            </div>
        </div>
        
        <div>
            <div className="flex items-center justify-center space-x-10 text-sm py-3">
            {
            horizontalDetails.map(({id,Icon,title,value})=>(
                <div key={id} className='flex font-light text-sm items-center justify-center cursor-pointer hover:scale-95 duration-200'>     
                    <Icon size={18} className='mr-1'/>
                    <p className='font-light ml-1'>{title}</p>
                    <span className='font-medium ml-1'>{value};</span>
                </div>
                ))
                }
            </div>
        </div>

    </div>
  )
}

export default TempAndDetails