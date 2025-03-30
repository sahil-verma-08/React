import React from 'react'

function Card({username,someobj,someArray,image}) {
    // console.log(username,someobj,someArray)
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 mb-2">
        <img className="w-full h-48 object-cover rounded-md" src={image} alt="Card Image"/>
        <h2 className="text-xl font-semibold text-gray-800 mt-4">{username}</h2>
        <p className="text-gray-600 mt-2">This is a simple card component using Tailwind CSS.</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Learn More</button>
    </div>
  )
}

export default Card