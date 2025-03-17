import React from 'react'
import { NavLink } from 'react-router'
import logo from "../assets/logo.jpg"

const Footer = () => {
  return (
    <div className='w-[100vw] h-auto flex flex-col justify-center items-center text-[#fff]'>
      <div className='w-full h-auto flex flex-col sm:flex-row justify-center sm:justify-around items-start sm:items-center bg-[#1A1B1B] px-[24px] sm:px-[64px] py-[36px] mt-[20px] gap-[40px] sm:gap-[50px]'>
        <div className='w-fit flex self-center smjustify-center items-center rounded-[10px] sm:rounded-full overflow-hidden'>
          <img src={logo} alt="" className='w-[200px] scale-[1.5]'/>
        </div>
        <div className='w-fit flex flex-col justify-center items-start gap-[25px] sm:gap-[30px]'>

          <span className='text-[18px] font-medium sm:mb-[10px]'>Get In Touch</span>

          <span className='group font-light text-[#a6a6a6] flex justify-center items-center w-fit gap-[14px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone-call group-hover:text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>
            <span className='group-hover:text-primary font-normal'>+91 1234567890</span>
          </span>

          <span className='group font-light text-[#a6a6a6] flex justify-center items-center w-fit gap-[14px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail-open group-hover:text-primary"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
            <span className='group-hover:text-primary font-normal'>ridgetop@gmail.com</span>
          </span>

          <span className='group font-light text-[#a6a6a6] flex justify-center items-center w-fit gap-[14px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin group-hover:text-primary"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            <span className='group-hover:text-primary font-normal'>Churchgate , Mumbai</span>
          </span>
        </div>

        <div className='w-fit flex flex-col justify-center items-start gap-[25px] sm:gap-[30px]'>
          <span className='text-[18px] font-medium sm:mb-[10px]'>Links</span>
          <NavLink to={"/"} className={"text-[#a6a6a6] font-normal hover:text-primary"}>Home</NavLink>
          <NavLink to={"/service"} className={"text-[#a6a6a6] font-normal hover:text-primary"}>Service</NavLink>
          <NavLink to={"/contactus"} className={"text-[#a6a6a6] font-normal hover:text-primary"}>Contact Us</NavLink>
        </div>
        <div className='w-fit flex flex-col justify-center items-start gap-[25px] sm:gap-[30px]'>
          <span className='text-[18px] font-medium sm:mb-[10px]'>Social Media</span>
          <NavLink target='_blank' to={"/"} className={"text-[#a6a6a6] font-normal hover:text-primary2 flex justify-start items-center gap-[8px]"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          Instagram
          </NavLink>
          <NavLink target='_blank' to={"/service"} className={"text-[#a6a6a6] font-normal hover:text-primary flex justify-start items-center gap-[8px]"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            Facebook
          </NavLink>
          <NavLink target='_blank' to={"/contactus"} className={"text-[#a6a6a6] font-normal hover:text-primary flex justify-start items-center gap-[8px]"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            Twitter
          </NavLink>
        </div>
      </div>
      <div className='w-full text-center text-[14px] sm:text-[16px] font-light flex justify-center items-center px-[24px] sm:px-[64px] py-[16px] sm:py-[18px] bg-[#000]'>
        © Copyright2025 RidgeTop Heating and Cooling Solutions All Rights Reserved
      </div> 
    </div>
  )
}

export default Footer