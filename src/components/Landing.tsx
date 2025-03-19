// import React from 'react'
import Autoplay from "embla-carousel-autoplay";
import aboutus from "../assets/aboutus.jpg";
import cold_1 from "../assets/cold_1.jpg";
import cold_2 from "../assets/cold_2.jpg";
import heat_1 from "../assets/heat_1.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/Carousal";
import Card from "./ui/Card";
import { MarqueeDemo } from "./ui/MarqueeDemo";
import Reviews from "./ui/Reviews";
import { InteractiveHoverButton } from "./ui/specialButton";

const Landing = () => {
  const link =
    "https://www.google.com/search?client=safari&sca_esv=4506315641ad45d1&hl=en-au&q=ridgetop+heating+%26+cooling+pty+ltd+the+patch+reviews&uds=ABqPDvxQw-T2ek32yIUl7RlMWreVbHEbLbxuFr_0m6g_afk8GdlXkJOMYiRvI6MhWpcInh6zTIF34Fv_FtTUQ7MnZxA0-Sjlvc26mWLn-aEf-veSXcLI_-MrQFM0_51QnuP6VzeklYbAciLG3qWodUarM9qvXPYlYvOXDWzJ4I84M5qHci-dLETSjBoc_CT0PjihJl4AVVO5Q1BXyo-VLKUONt_nr7apsL2xUCQIQNmYD9JG-W-sCVjnQ024PEjXTUDiYV10pDv24A-K69n7GKab_HxHg1mCbppTrRsp-qUoUEL8uzj_pPB0kuuy1vmfiHIJ84mF7gmC1QLpqsibxG-zhhSFFuz6aa89h0byv8-QM6Ljje_nINHqhC69sLpaGBhGbNnJza_QWcVbLJ7dJ3cGKMH0Qtag_NrK3QswfkHw8YEN25R9T1qy6Th3kq21yH0unZM8zLwOQB-ENVan_qgpmUmak5FOTGPVH393T3-ggvkFaOb3yH0&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzUiEPKGyzwahPU7QqJu3SrWxYoUGeo3GwAty-BLClOwahjkVw7wr7c5qwIDIOMTqzvNnfSBNP2ehND8_Ew6GdBjuNuhSPR81JGKdDhUztgND4BezFbvkHjqsTRZRZNJNoQEBQJc%3D&sa=X&ved=2ahUKEwiZwOP9qO2LAxWtulYBHZ8JA4QQk8gLegQIKxAB&ictx=1&biw=390&bih=663&dpr=3#ebo=2";

  const handleExternalNavigation = () => {
    // Replace with the external URL
    window.open(link, "_blank");
  };

  return (
    <div className="w-[100vw] h-auto flex flex-col justify-center items-center overflow-x-hidden mt-[10px]">
      {/* Landing page */}
      <div className="w-11/12 h-[450px] sm:h-[600px] flex justify-center items-center rounded-[30px] overflow-hidden relative mb-[70px]">
        <div className="absolute top-0 right-0 left-0">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <img
                  src={cold_1}
                  alt=""
                  className="w-full h-[600px] object-cover object-top"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={heat_1}
                  alt=""
                  className="w-full h-[600px] object-cover object-top"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={cold_2}
                  alt=""
                  className="w-full h-[600px] object-cover object-top"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        <div className="w-full h-full bg-[#000] z-50 bg-opacity-50 flex justify-center items-center px-[40px]">
          <span className="text-[#fff] text-[54px] sm:text-[64px] font-medium">
            Welcome to Ridge Top
          </span>
        </div>
      </div>

      {/* aboutus page */}

      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center px-[24px] sm:px-[64px] py-[64px] sm:py-[96px] bg-gradient-to-r from-[#d4f6ff] gap-[40px]">
        <div className=" basis-1/2 flex flex-col justify-center items-start gap-[20px]">
          <span className="text-[36px] sm:text-[42px] font-semibold">
            About us
          </span>
          <p className="text-[15px] sm:text-[16px]">
            Providing all aspects of mechanical plumbing, heating, and air
            conditioning for residential and commercial properties. From
            installations to repairs and maintenance, we deliver reliable,
            high-quality service to keep your systems running efficiently.
            Customer satisfaction and expert workmanship are our top priorities.
          </p>
          <p className="text-[15px] sm:text-[16px]">
            Customer satisfaction and expert workmanship are at the heart of
            everything we do. We understand the importance of a comfortable and
            functional living or working environment, which is why we prioritize
            clear communication, timely service, and attention to detail in
            every project. Our experienced technicians are fully licensed and
            trained to handle any challenge, ensuring your systems are not only
            running efficiently but also extending their lifespan.
          </p>
        </div>
        <div className="basis-1/2 flex justify-center items-center overflow-hidden rounded-[20px]">
          <img
            src={aboutus}
            alt=""
            className="h-[350px] max-h-[400px] rounded-[20px] object-cover"
          />
        </div>
      </div>

      {/* feature page */}
      <div className="w-full h-auto flex flex-col justify-center items-center px-[24px] sm:px-[64px] py-[64px] sm:py-[96px]">
        <div className="w-full h-auto flex flex-col justify-center items-center gap-[8px] mb-[40px]">
          <span className="text-[28px] sm:text-[42px] font-semibold">
            Why Choose Us
          </span>
          <span className="text-wrap text-[#525252] text-center text-[16px] sm:text-[20px]">
            The principles that guide everything we do
          </span>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center items-center gap-[30px]">
          <Card
            title="Quality"
            content="We never compromise on the quality of our work , using only the best materials and equipment for every job."
            logo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-award text-[#007592]"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                <circle cx="12" cy="8" r="6" />
              </svg>
            }
            logoBg="#e6faff"
          />
          <Card
            title="Reliability"
            content="When we make a promise , we keep it. Our customers count on us to be there when they need us most."
            logo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-clock text-[#d63f24]"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            }
            logoBg="#ffedea"
          />
          <Card
            title="Expertise"
            content="Our team consists of certified professionals with years of experience in heating and cooling systems."
            logo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-users text-[#007592]"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
            logoBg="#e6faff"
          />
        </div>
      </div>

      {/* testimonials */}

      <div className="w-full h-auto flex flex-col justify-center items-center px-[24px] sm:px-[64px] py-[64px] sm:py-[96px] bg-black text-[#fff] gap-[40px]">
        <div className="w-full flex flex-col justify-center items-center gap-[10px]">
          <span className="text-[28px] sm:text-[42px] font-semibold">
            Our Gallery
          </span>
          <span className="text-wrap text-[#c1c1c1] text-center text-[16px] sm:text-[20px]">
            We aim to make your life better
          </span>
        </div>
        <MarqueeDemo />
      </div>

      {/* Google reviews */}

      <div className="w-full h-auto flex flex-col justify-center items-center px-[24px] sm:px-[64px] py-[64px] sm:py-[96px] gap-[40px]">
        <div className="w-full h-auto flex flex-col justify-center items-center gap-[8px] mb-[10px]">
          <span className="text-[28px] sm:text-[42px] font-semibold">
            Our Google Reviews
          </span>
          <span className="text-wrap text-[#525252] text-center text-[16px] sm:text-[20px]">
            See what our customers are saying about our services on Google
          </span>
        </div>
        <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-[80px]">
          <div className="basis-1/3 flex flex-col justify-center items-center gap-[8px] bg-[#e6ffff] p-[30px] rounded-[20px]">
            <span className="text-[24px] sm:text-[28px] font-medium text-center">
              Overall Google Ratings
            </span>
            <span className="text-[60px] sm:text-[64px] font-semibold">
              5.0
            </span>
            <span>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
            </span>
            <span className="text-[#525252] text-center">
              Based on Customer reviews
            </span>
            <span className="mt-[12px]">
              <InteractiveHoverButton
                className="bg-[#fff]"
                onClick={handleExternalNavigation}
              >
                Reviews
              </InteractiveHoverButton>
            </span>
          </div>

          <div className="basis-2/3 flex justify-center items-center overflow-hidden relative">
            <div className="absolute hidden lg:flex left-[-30px] w-[100px] h-[300px] z-10 bg-white blur-[10px]"></div>
            <div className="absolute hidden lg:flex right-[-30px] w-[100px] h-[300px] z-10 bg-white blur-[10px]"></div>
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
