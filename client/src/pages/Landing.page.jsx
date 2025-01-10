import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/auth')
    }
    return (
        <>
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='rounded-lg w-screen min-h-screen flex justify-center items-center '>
                <div className=' rounded-lg flex flex-col md:w-1/4 md:h-[350px] items-center justify-center '>
                    <h1 className='shadow-xl bigFont font-bold '>ChatZ</h1>
                    <p className='text-gray-700 smallFont'>your space to talk and share</p>
                </div>
                <button
                    onClick={handleOnClick}
                 className="absolute top-[70%] flex items-center px-4 py-2 bg-gray-900 text-gray-200 rounded-md hover:bg-gray-600">
                    Lets Get Started
                </button>
            </div>
        </>
    )
}

export default Landing