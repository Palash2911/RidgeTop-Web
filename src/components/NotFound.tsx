import React from 'react'

const NotFound = () => {
  return (
    <div
        className='w-screen h-[80vh] flex flex-col justify-center items-center px-[24px] sm:px-[64px] py-[32px] sm:py-[64px] overflow-hidden '
    >
        <span className='text-[64px] sm:text-[96px] font-semibold'>4<span className='text-primary2'>0</span>4</span>
        <span className='text-[28px] sm:text-[36px] text-center'> Sorry ! Page Not Found</span>
    </div>
  )
}

export default NotFound