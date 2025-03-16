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


const Landing = () => {
  return (
    <div className='w-[100vw] h-auto flex justify-center items-center overflow-x-hidden mt-[10px]'>
      <div className='w-11/12 h-[600px] flex justify-center items-center rounded-[30px] overflow-hidden relative'>

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
      
    </div>
  )
}

export default Landing