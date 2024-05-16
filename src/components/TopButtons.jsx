import React from 'react'



const TopButtons = () => {
    const cities = [
        { id: 1, city: "Tokyo" },
        { id: 2, city: "Paris" },
        { id: 3, city: "Toronto" },
        { id: 4, city: "London" },
        { id: 5, city: "Delhi" },
    ]

    return (
        <div className='flex items-center justify-around my-6'>
            {
                cities.map(({ id, city }) => (
                        
            <button key={id} className='text-lg font-medium hover:bg-gray-900  transition ease-in px-3 py-1 rounded-md hover:scale-95 duration-200'>
                {city}
            </button>
                    ))
                }
        </div>
    )
}

export default TopButtons;