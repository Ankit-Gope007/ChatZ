import React from 'react'

const LandingPage = () => {
    return (
        <>
            <div class="area">
                <ul class="circles">
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
                <div className=' rounded-lg flex flex-col w-1/4 h-[350px] items-center justify-center'>
                    <h1 className='shadow-xl bigFont font-bold '>ChatZ</h1>
                    <p className='text-gray-700 smallFont'>your space to talk and share</p>
                </div>
                <button class="absolute top-[70%] flex items-center px-4 py-2 bg-gray-900 text-gray-200 rounded-md hover:bg-gray-600">
                    <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google Logo" class="w-5 h-5 mr-2"/>
                        Login with Google
                </button>
            </div>
        </>
    )
}

export default LandingPage