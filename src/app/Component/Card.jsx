import React from 'react'

const Card = ({ text1, text2, text3, img, className = "" }) => {
  return (
    <div className={`bg-white text-gray-900 flex flex-col items-center text-center gap-4 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <img 
        src={img} 
        className='h-20 w-20 rounded-full object-cover border-4 border-gray-100' 
        alt={text2} 
      />
      <p className='text-sm text-gray-600'>{text1}</p>
      <div>
        <h1 className='font-bold text-lg mb-2'>{text2}</h1>
        <p className='text-gray-500 text-sm leading-relaxed'>{text3}</p>
      </div>
    </div>
  )
}

export default Card