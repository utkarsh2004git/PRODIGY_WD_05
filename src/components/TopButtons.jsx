import React from 'react'



const TopButtons = ({setQuery}) => {
    const cities = [
        { id: 1, name: "Nagpur" },
        { id: 2, name: "Mumbai" },
        { id: 3, name: "Delhi" },
        { id: 4, name: "London" },
        { id: 5, name: "Dubai" },
    ]

    return (
        <div className='flex items-center justify-around my-6'>
            {
                cities.map((city ) => (
                        
            <button key={city.id} onClick={()=>setQuery({q:city.name})} className='text-lg font-medium hover:bg-gray-900  transition ease-in px-3 py-1 rounded-md hover:scale-95 duration-200'>
                {city.name}
            </button>
                    ))
                }
        </div>
    )
}

export default TopButtons;