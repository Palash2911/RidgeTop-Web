import daikin from "../assets/Daikin.png";
import ducted from "../assets/Ducted_Air_Conditioning.jpg";
import evaporate from "../assets/Evaporative_Cooling_service_image.jpg";
import gas from "../assets/Gas_Ducted_Heating.jpg";
import Hisense from "../assets/Hisense.jpg";
import hotwater from "../assets/Hot_service_and_boiler.jpg";
import mistubishi from "../assets/mitsubishi.jpg";
import panasonic from "../assets/Panasonic.webp";
import product1 from "../assets/product_6.png";
import maintain from "../assets/Service_and_repair.jpg";
import split from "../assets/Split_System.jpg";
import ServiceCard from "./ui/ServiceCard";

const Service = () => {
  return (
    <div className="w-screen h-auto flex flex-col justify-center items-center relative px-[24px] sm:px-[64px] py-[32px] sm:py-[64px] overflow-hidden gap-[20px]">
      <div className="w-full h-auto flex flex-col justify-center items-center relative overflow-hidden">
        <span className="text-[28px] sm:text-[42px] font-semibold">
          Our Services
        </span>
        <span className="text-wrap text-[#525252] text-center text-[16px] sm:text-[20px]">
          We provide a varitey of heating and cooling solutions
        </span>
        <div className="w-full h-auto flex flex-wrap justify-center items-center relative mt-[50px] gap-[50px]">
          <ServiceCard
            image={ducted}
            title="Ducted Air Conditioning"
            content="Experience year-round comfort with a ducted air conditioning system. We offer seamless installations, repairs, and servicing to keep your home at the perfect temperature, no matter the season. "
            classname=""
          />
          <ServiceCard
            image={gas}
            title="Gas Ducted Heating"
            content="Keep your home cozy all winter with efficient and reliable gas ducted heating systems. Enjoy even warmth throughout your space with our expert installation and repair services."
            classname=""
          />
          <ServiceCard
            image={evaporate}
            title="Evaporative Cooling"
            content="Stay cool and refreshed with eco-friendly, energy-efficient evaporative cooling systems. Perfect for dry climates, we'll help you enjoy a comfortable, breathable environment."
            classname="object-top"
          />
          <ServiceCard
            image={split}
            title="Split Systems"
            content="Stay in control of your comfort with a split system air conditioning unit. Ideal for individual rooms or zones, we offer expert installation, repairs, and servicing to meet your needs."
            classname=""
          />
          <ServiceCard
            image={hotwater}
            title="Hot Water and Hydronic Boiler Replacements"
            content="Get hot water when you need it most! We specialize in replacing old or faulty hot water and boiler heaters with energy-efficient systems that save you money in the long run."
            classname=""
          />
          <ServiceCard
            image={maintain}
            title="Servicing, Maintenance, and Breakdown Repair"
            content="Keep your systems running smoothly with our comprehensive servicing and maintenance plans. We offer prompt, reliable repairs to minimize downtime and extend the life of your heating and cooling units."
            classname=""
          />
        </div>
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center relative overflow-hidden mt-[80px]">
        <span className="text-[28px] sm:text-[42px] font-semibold">
          Products
        </span>
        <span className="text-wrap text-[#525252] text-center text-[16px] sm:text-[20px]">
          These are the brands whose products we use and recommend to our
          customers
        </span>
        <div className="w-full h-auto flex flex-wrap justify-center items-center relative mt-[50px] gap-[50px]">
          <img src={daikin} alt="" className="w-[200px] object-cover" />
          <img src={panasonic} alt="" className="w-[200px] object-cover" />
          <img src={mistubishi} alt="" className="w-[200px] object-cover" />
          {/* <img src={mistubishiH} alt="" className="w-[200px] object-cover" /> */}
          <img src={Hisense} alt="" className="w-[200px] object-cover" />
          <img src={product1} alt="" className="w-[200px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Service;
