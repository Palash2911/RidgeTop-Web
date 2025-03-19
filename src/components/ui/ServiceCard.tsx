import React from 'react'
import { cn } from '../../lib/utils'

interface cardProps{
    image:string,
    title:string,
    content:string,
    classname:string
}


const ServiceCard = ({image, title , content,classname}:cardProps) => {
  return (
    <div className='w-auto max-w-sm h-auto max-h-[500px] flex flex-col justify-center items-start px-[24px] py-[18px] border-[2px] rounded-[10px] gap-[16px] hover:scale-[1.02] ease-in-out duration-300'>
        <span className="w-full rounded-[6px] flex justify-center items-center overflow-hidden">
          <img src={image} alt="" className={cn('w-[400px] h-[300px] object-cover',classname)} />
        </span>
        <span className=' text-[17px] sm:text-[18px] font-medium'>
            {title}
        </span>
        <div className='text-[14px] sm:text-[15px] text-wrap text-[#525252]'>
            {content}
        </div>
    </div>
  )
}

export default ServiceCard