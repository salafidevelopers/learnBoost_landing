"use client";
import Image from "next/image";
import checkcircle from "../../public/check-circle.png";
import { useState } from "react";

const PRICING_DATA = [
  {
    price: "N1,200",
    duration: "6 month",
    details: "All the features to boost your  child learning journey",
    cardDetail1: "Access to all level content",
    cardDetail2: "Interactive lessons",
    cardDetail3: "Personalized learning",
    cardDetail4: "Regular updates",
    cardDetail5: "Parental insights",
  },
  {
    price: "N4,500",
    duration: "/ year",
    details: "All the features to boost your  child learning journey",
    cardDetail1: "All the benefits of the 6-month",
    cardDetail2: "Extended access for a full year",
    cardDetail3: "More time for continuous learning",
    cardDetail4: "Early access to new features",
    cardDetail5: "Discount rate",
  },
];

const Pricing = () => {
  const [pricingData, setPricingData] = useState(PRICING_DATA);
  return (
    <div className="p-20">
      <div className="text-center space-y-3">
        <h1 className="font-bold text-5xl ">
          Simple, easy pricing plans <br />
          for the application
        </h1>
        <p>
          We are confident that LearnBoost will exceed your expectations.
          However, your child's <br /> satisfaction is our top priority.
        </p>
      </div>
      <div className="flex justify-center items-center gap-10 mt-24">
        {pricingData.map((data) => (
          <div
            key={data.price}
            className="space-y-8 p-6 pr-20 hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <div className="space-y-3">
              <div className="space-x-4">
                <span className="text-5xl font-bold">{data.price}</span>
                <span className="text-base font-normal">{data.duration}</span>
              </div>
              <p>{data.details}</p>
            </div>
            <div className="space-y-6 ">
              <div className="flex gap-3">
                <Image src={checkcircle} alt="" />
                <p>{data.cardDetail1}</p>
              </div>
              <div className="flex gap-3">
                <Image src={checkcircle} alt="" />
                <p>{data.cardDetail2}</p>
              </div>
              <div className="flex gap-3">
                <Image src={checkcircle} alt="" />
                <p>{data.cardDetail3}</p>
              </div>
              <div className="flex gap-3">
                <Image src={checkcircle} alt="" />
                <p>{data.cardDetail4}</p>
              </div>
              <div className="flex gap-3">
                <Image src={checkcircle} alt="" />
                <p>{data.cardDetail5}</p>
              </div>
            </div>
            <button className="text-[#267D2F] w-full border border-[#267D2F] px-4 py-2 rounded-sm hover:bg-[#267D2F] hover:text-white transition duration-300">
              Get 14 Days Free Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
