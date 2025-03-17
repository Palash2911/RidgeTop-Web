import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/Carousal"
import Autoplay from "embla-carousel-autoplay"
import cold_1 from "../assets/cold_1.jpg"
import cold_2 from "../assets/cold_2.jpg"
import heat_1 from "../assets/heat_1.jpg"
import Card from './ui/Card'


const Landing = () => {
  return (
    <div className='w-[100vw] h-auto flex flex-col justify-center items-center overflow-x-hidden mt-[10px]'>

      {/* Landing page */}
      <div className='w-11/12 h-[450px] sm:h-[600px] flex justify-center items-center rounded-[30px] overflow-hidden relative mb-[70px]'>

        <div className='absolute top-0 right-0 left-0'>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <img src={cold_1} alt="" className='w-full h-[600px] object-cover object-top'/>
              </CarouselItem>
              <CarouselItem>
                <img src={heat_1} alt="" className='w-full h-[600px] object-cover object-top'/>
              </CarouselItem>
              <CarouselItem>
                <img src={cold_2} alt="" className='w-full h-[600px] object-cover object-top'/>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className='w-full h-full bg-[#000] z-50 bg-opacity-50 flex justify-center items-center px-[40px]'>
          <span className='text-[#fff] text-[64px] font-medium'>Welcome to Ridge Top</span>
        </div>
      </div>

      {/* aboutus page */}

      <div className='w-full h-auto flex justify-center items-center px-[24px] sm:px-[64px] py-[64px] sm:py-[96px] bg-gradient-to-r from-[#e6faff]'>
        <div className=' basis-1/2 flex flex-col justify-center items-start'>
          <span className='text-[42px] font-semibold'>About us</span>
          <p></p>
        </div>
        <div className='basis-1/2 flex justify-center items-center'>
            <img src="" alt="" />
        </div>
      </div>

      {/* feature page */}
      <div className='w-full h-auto flex flex-col justify-center items-center px-[24px] sm:px-[64px] py-[64px] sm:py-[96px]'>
        <div className='w-full h-auto flex flex-col justify-center items-center gap-[8px] mb-[40px]'>
            <span className='text-[24px] sm:text-[32px] font-semibold'>Our Core Values</span>
            <span className='text-wrap text-[#525252] text-center text-[16px] sm:text-[20px]'>The principles that guide everything we do</span>
        </div>
        <div className='w-full h-auto flex flex-wrap justify-center items-center gap-[30px]'>
          <Card
            title="Quality"
            content='We never compromise on the quality of our work , using only the best materials and equipment for every job.'
            logo={<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-award text-[#007592]"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>}
            logoBg='#e6faff'
          />
          <Card
            title="Reliability"
            content='When we make a promise , we keep it. Our customers count on us to be there when they need us most.'
            logo={<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock text-[#d63f24]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
            logoBg='#ffedea'
          />
          <Card
            title="Expertise"
            content='Our team consists of certified professionals with years of experience in heating and cooling systems.'
            logo={<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users text-[#007592]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            logoBg='#e6faff'
          />
        </div>
        
      </div>

    </div>
  )
}

export default Landing