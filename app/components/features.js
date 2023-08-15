"use client";

import Image from "next/image";
import expert from "../../public/expert.png";
import learn from "../../public/learn.png";
import support from "../../public/support.png";
import { useState } from "react";

const FEATURE_DATA = [
  {
    title: " Expert Instructors",
    img: expert,
    subtitle:
      "Whether you want to dive into Mathematics, explore Creativity, boost your language proficiency, LearnBoost has got you covered.",
  },
  {
    title: "Learn  Anywhere",
    img: learn,
    subtitle:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    title: "Suporting",
    img: support,
    subtitle:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
];

const Features = () => {
  const [featureData, setFeatureData] = useState(FEATURE_DATA);
  return (
    <div className="p-5 py-15 md:p-10 py-10">
      <div className="text-center md:text-left  p-20 space-y-4">
        <h1 className="font-semibold text-5xl md:font-bold md:text-6xl font[Plus Jakarta Sans] ">
          {" "}
          A brief description of how it works <br /> Boost apart from others
        </h1>
        <p className="font-normal text-base">
          Unlock your full potential - all from the convenience of your
          fingertips!
        </p>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-10 md:flex-nowrap	">
        {featureData.map((data) => (
          <div key={data.title}>
            <div className="space-y-4  cursor-pointer p-5 hover:shadow-lg">
              <Image src={data.img} alt="" />
              <h3 className="font-bold text-xl font-['Plus Jakarta Sans']">
                {data.title}
              </h3>
              <p className="font-normal text-base">{data.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
