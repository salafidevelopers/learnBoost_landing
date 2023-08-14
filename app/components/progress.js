"use client";

import Image from "next/image";
import progressimg from "../../public/progressimg.png";
import successicon from "../../public/successicon.png";
import { useState } from "react";

const SUCCESS_DATA = [
  {
    img: successicon,
    title: "Supportive Community",
    subtitle: "Supportive community where children can connect",
  },
  {
    img: successicon,
    title: "Involvement and Insights",
    subtitle: "We believe in the power of parental involvement.",
  },
  {
    img: successicon,
    title: "Child's Education",
    subtitle: "We are your partner in your child's education.",
  },
  {
    img: successicon,
    title: "Learning Adventure",
    subtitle: "Get ready to embark on an exciting learning adventure",
  },
];

const Progress = () => {
  const [successData, setSuccessData] = useState(SUCCESS_DATA);

  return (
    <div className="flex p-20 ">
      <div className="space-y-5">
        <div className="space-y-5">
          <h1 className="font-bold text-5xl">
            Track Progress and Celebrate Achievements
          </h1>
          <p>
            As a parent, you will be delighted to track your child&apos;s
            progress through our easy-to-use dashboard. Watch as your little one
            achieves milestones and earns badges, celebrating every step of the
            way.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-row-2 gap-4">
          {successData.map((data) => (
            <div className="space-y-3" key={data.title}>
              <Image src={data.img} alt="" />
              <h3 className="font-bold">{data.title}</h3>
              <p>{data.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image src={progressimg} alt="" />
      </div>
    </div>
  );
};

export default Progress;
