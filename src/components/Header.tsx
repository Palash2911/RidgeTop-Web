import { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked((prev) => !prev);
  }

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="w-full hidden h-auto px-[48px] py-[21px] bg-[#000] sm:flex sm:justify-start sm:items-center sm:gap-[32px]">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-primary2 font-medium"
              : "text-[#a6a6a6] font-normal hover:text-primary"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/service"}
          className={({ isActive }) =>
            isActive
              ? "text-primary2 font-medium"
              : "text-[#a6a6a6] font-normal hover:text-primary"
          }
        >
          Service
        </NavLink>
        <NavLink
          to={"/contactus"}
          className={({ isActive }) =>
            isActive
              ? "text-primary2 font-medium"
              : "text-[#a6a6a6] font-normal hover:text-primary"
          }
        >
          Contact Us
        </NavLink>
      </div>

      {/* mobile navbar */}

      <div className="w-full sm:hidden h-auto px-[24px] py-[12px] bg-primary2 flex justify-end items-center">
        <button className="w-fit cursor-pointer" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        {clicked && (
          <div className="animate-slideIn w-full sm:hidden top-0 right-0 left-0 z-[100] h-auto px-[32px] py-[16px] pb-[40px] bg-[#000] flex flex-col justify-center items-start gap-[32px] absolute">
            <button
              className="w-fit self-end cursor-pointer"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x text-[#fff]"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-primary2 font-medium"
                  : "text-[#a6a6a6] font-normal hover:text-primary"
              }
              onClick={handleClick}
            >
              Home
            </NavLink>
            <NavLink
              to={"/service"}
              className={({ isActive }) =>
                isActive
                  ? "text-primary2 font-medium"
                  : "text-[#a6a6a6] font-normal hover:text-primary"
              }
              onClick={handleClick}
            >
              Service
            </NavLink>
            <NavLink
              to={"/contactus"}
              className={({ isActive }) =>
                isActive
                  ? "text-primary2 font-medium"
                  : "text-[#a6a6a6] font-normal hover:text-primary"
              }
              onClick={handleClick}
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </div>

      <div className="w-full h-auto px-[21px] sm:px-[64px] py-[12px] bg-[#fff] flex flex-col md:flex-row justify-between items-center drop-shadow-md gap-[16px] md:gap-[30px] lg:gap-[50px]">
        <div className="flex flex-col justify-center items-center md:items-start w-fit h-auto gap-[5px]">
          <div className="text-[24px] font-semibold">Ridgetop</div>
          <div className="text-[16px] text-nowrap">
            <span className="text-primary2">Heating </span>
            and <span className="text-primary">Cooling </span>
            Solutions
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center w-fit h-auto gap-[16px] sm:gap-[30px] md:gap-[50px] lg:gap-[80px]">
          <div className="flex justify-center items-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone-call"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              <path d="M14.05 2a9 9 0 0 1 8 7.94" />
              <path d="M14.05 6A5 5 0 0 1 18 10" />
            </svg>
            <span className="flex flex-col justify-center items-start gap-[2px]">
              <span className="text-[#949494] text-[12px] ml-[7px]">
                Toll Free
              </span>
              <span className="text-nowrap">+61 499 475 590</span>
            </span>
          </div>
          <div className="flex justify-center items-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail-open"
            >
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
            </svg>
            <span className="flex flex-col justify-center items-start gap-[2px]">
              <span className="text-[#949494] text-[12px] ml-[2px]">Email</span>
              <span className="text-nowrap">Sales@ridgetophvac.com</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
