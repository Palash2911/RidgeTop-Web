import React from 'react'

interface cardProps{
    logo:React.ReactNode,
    title:string,
    content:string,
    logoBg:string
}

const Card = ({logo,title,content,logoBg}:cardProps) => {
  return (
    <div className='w-auto max-w-sm  h-auto flex flex-col justify-center items-start px-[24px] py-[18px] border-[2px] rounded-[10px] gap-[16px] overflow-hidden'>
        <span className={`p-[12px] rounded-[6px] flex justify-center items-center`} style={{backgroundColor:`${logoBg}`}}>
            {logo}
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

export default Card