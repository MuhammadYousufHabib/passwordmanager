import React from 'react'

const Button = ({type,text}) => {
  return (
    <button
            type={type}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
          >
            {text}
          </button>
  )
}

export default Button