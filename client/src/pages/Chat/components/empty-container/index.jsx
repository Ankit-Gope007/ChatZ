import React from 'react'
import Lottie from 'react-lottie'
import { animationDefaultOptions } from '@/lib/utils'

const EmptyContainer = () => {
  return (
    <div className="flex-1 md:bg-[#1c1d25] md:flex flex-col justify-center items-center hidden duration-1000 transition-all">
        <Lottie
        isClickToPauseDisabled={true}
        height={200}
        width={200}
        options={animationDefaultOptions}
        />
        <div className='text-opacity-80 text-white mt-10 gap-5 flex flex-col items-center lg:4xl text-3xl transition-all duration-300 text-center '>
            <h3 className='poppins-medium'>
                Hi <span className='text-purple-500'>!</span> Welcome to
                <span className='text-purple-500'>ChatZ</span> 
                <span className='text-purple-500'>.</span>
            </h3>
        </div>
    </div>
  )
}

export default EmptyContainer