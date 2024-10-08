"use client";

import assets from "@/assets";
import Image from "next/image";
import CountUp from "react-countup";

const AchivementCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-8 gap-6 lg:mt-10 md:mt-8 mt-6">
      <div className="w-[95%] mx-auto lg:w-full md:w-full flex justify-evenly items-center gap-5 lg:p-8 md:p-8 p-6 rounded-lg shadow-xl border border-slate-200">
        <div className={`bg-[#FEEFD8] rounded-lg p-5`}>
          <Image
            src={assets.home.member}
            alt={"Memberships"}
            width={60}
            height={70}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <CountUp
            end={1280}
            duration={4}
            delay={2}
            className={`lg:text-5xl text-3xl font-bold text-[#FFA24C] text-center`}
          />
          <h4 className="text-2xl font-semibold mt-3 ">Memberships</h4>
        </div>
      </div>

      <div className="w-[95%] mx-auto lg:w-full md:w-full flex justify-evenly items-center gap-5 lg:p-8 md:p-8 p-6 rounded-lg shadow-xl border border-slate-200">
        <div className={`bg-[#D8F9FE] rounded-lg p-5`}>
          <Image
            src={assets.home.happy}
            alt={"Happy Pets"}
            width={60}
            height={70}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <CountUp
            end={385}
            duration={4}
            delay={2}
            className={`lg:text-5xl text-3xl font-bold text-[#1999FB] text-center`}
          />
          <h4 className="text-2xl font-semibold mt-3 ">Happy Pets</h4>
        </div>
      </div>

      <div className="w-[95%] mx-auto lg:w-full md:w-full flex justify-evenly items-center gap-5 lg:p-8 md:p-8 p-6 rounded-lg shadow-xl border border-slate-200">
        <div className={`bg-[#FFE6E6] rounded-lg p-5`}>
          <Image
            src={assets.home.customer}
            alt={"Customers"}
            width={60}
            height={70}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <CountUp
            end={963}
            duration={4}
            delay={2}
            className={`lg:text-5xl text-3xl font-bold text-[#E82A34] text-center`}
          />
          <h4 className="text-2xl font-semibold mt-3 ">Customers</h4>
        </div>
      </div>
    </div>
  );
};

export default AchivementCard;
