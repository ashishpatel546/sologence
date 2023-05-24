import React from 'react'

export const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-gray-800'>
        <a href='mailto:g1234@gmail.com'>
            <p className='text-sn rotate-90 w-72 text-gray-800 hover:text-textGreen'>g1234@gmail.com</p>
        </a>
        <div className='w-[2px] h-32 bg-black '></div>
    </div>
  )
}
