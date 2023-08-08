import Image from "next/image";
import heroimage from "../../public/heroimage.png";
import googleplay from "../../public/googleplay.png";
import appstore from "../../public/appstore.png";

const HeroSection = () => {
  return (
    <div className="flex items-center p-10">
      <div className="space-y-5">
        <h1 className="font-bold text-6xl font[Plus Jakarta Sans] ">
          Introducing LearnBoost: The Ultimate Learning Mobile App
        </h1>
        <p className="font-medium text-lg">
          Are you ready to take your learning journey to new heights? Welcome to
          LearnBoost, the ultimate mbile app that empowers you to expand your
          knowledge,
        </p>
        <div className="flex gap-5 items-center cursor-pointer">
          <Image src={googleplay} alt="" />
          <Image src={appstore} alt="" />
        </div>
      </div>
      <Image src={heroimage} alt="" />
    </div>
  );
};

export default HeroSection;
