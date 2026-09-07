import { ClipboardCheck, ShieldCheck, Wind, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import qrCodeRebate from "../../assets/qr-code-rebate.svg";
import { cn } from "../../lib/utils";
import { Button } from "./Button";

const rebateServices = [
  {
    title: "Energy-efficient heating and cooling",
    logo: <Zap className="text-primary" size={22} />,
    logoBg: "#e6f4fb",
  },
  {
    title: "VEU-approved reverse cycle systems",
    logo: <ShieldCheck className="text-primary2" size={22} />,
    logoBg: "#fdeceb",
  },
  {
    title: "Ducted and non-ducted options",
    logo: <Wind className="text-primary" size={22} />,
    logoBg: "#e6f4fb",
  },
  {
    title: "Product and rebate guidance",
    logo: <ClipboardCheck className="text-primary2" size={22} />,
    logoBg: "#fdeceb",
  },
];

const RebateSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-auto flex flex-col justify-center items-center px-[24px] sm:px-[64px] py-[64px] sm:py-[96px] bg-gradient-to-br from-[#eaf6ff] to-[#fff4f0] gap-[40px]">
      {/* Powered by header, plain text style, matches the rebateM8 logo color scheme */}
      <div className="flex flex-col items-center gap-[2px]">
        <span className="text-[13px] sm:text-[14px] font-medium text-[#6b6b6b]">
          Powered by
        </span>
        <span className="text-[22px] sm:text-[28px] font-extrabold tracking-tight leading-none">
          <span className="text-[#0a0a0a]">rebate</span>
          <span className="text-[#f5a623]">M8</span>
        </span>
      </div>

      <div className="w-full h-auto flex flex-col justify-center items-center gap-[8px]">
        <span className="text-[28px] sm:text-[42px] font-semibold text-center">
          Upgrade Your Comfort and Save with{" "}
          <span className="text-primary2">VEU</span> Rebates
        </span>
        <span className="text-wrap text-[#525252] text-center text-[16px] sm:text-[20px] max-w-[720px]">
          VEU-approved, energy-efficient heating and cooling upgrades built to
          keep your home comfortable all year round.
        </span>
      </div>

      <div
        className={cn(
          "w-full max-w-[1100px] flex flex-col lg:flex-row justify-center items-stretch gap-[30px]",
        )}
      >
        <div className="basis-1/2 flex flex-col justify-center items-start px-[24px] sm:px-[32px] py-[28px] bg-[#fff] border-[2px] rounded-[20px] gap-[16px]">
          <span className="text-[19px] sm:text-[20px] font-medium">
            About the Rebates
          </span>
          <p className="text-[14px] sm:text-[15px] text-[#525252]">
            The Victorian Energy Upgrades (VEU) program helps eligible
            Victorians bring down the upfront cost of approved heating and
            cooling upgrades. Moving to an eligible reverse cycle system can
            also cut your energy use and everyday running costs.
          </p>
          <p className="text-[14px] sm:text-[15px] text-[#525252]">
            Eligibility and the size of any discount depend on your property,
            the product installed, the installation itself, and the current
            program requirements, so every home is assessed on its own details.
          </p>
        </div>

        {/* relative wrapper so the QR badge can anchor to this card's top edge */}
        <div className="basis-1/2 relative">
          {/* QR badge, small, overlaps the top-right corner of the What This Covers card */}
          <div className="absolute -top-[14px] right-[20px] sm:-top-[20px] sm:right-[24px] flex flex-col items-center gap-[3px] rounded-[12px] p-[8px] sm:p-[10px] z-10 rotate-[-8deg] hover:rotate-0 transition-transform duration-300">
            <img
              src={qrCodeRebate}
              alt="Scan to check your induction cooktop rebate eligibility"
              className="w-[61px] h-[61px] rounded-[5px] bg-white p-[3px]"
            />
            <span className="text-[8px] sm:text-[9px] font-medium text-black leading-none whitespace-nowrap">
              Scan here
            </span>
          </div>

          <div className="w-full h-full flex flex-col justify-center items-start px-[24px] sm:px-[32px] py-[28px] bg-[#fff] border-[2px] rounded-[20px] gap-[16px]">
            <span className="text-[19px] sm:text-[20px] font-medium">
              What This Covers
            </span>
            <div className="w-full flex flex-col gap-[16px]">
              {rebateServices.map((item) => (
                <div
                  key={item.title}
                  className="flex justify-start items-center gap-[14px]"
                >
                  <span
                    className="p-[10px] rounded-[6px] flex justify-center items-center shrink-0"
                    style={{ backgroundColor: item.logoBg }}
                  >
                    {item.logo}
                  </span>
                  <span className="text-[14px] sm:text-[15px]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Button
        size="lg"
        className="bg-primary2 hover:bg-primary2/90 text-white px-[32px] py-[14px] text-[16px] font-semibold rounded-full shadow-lg shadow-primary2/30"
        onClick={() => navigate("/contactus")}
      >
        Get a Rebate Quote
      </Button>
    </div>
  );
};

export default RebateSection;
