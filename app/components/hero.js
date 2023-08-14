import Image from "next/image";
import heroimage from "../../public/heroimage.png";
import herophone from "../../public/herophone.png";
import googleplay from "../../public/googleplay.png";
import appstore from "../../public/appstore.png";

const HeroSection = () => {
  return (
    <section className="grid md:text-center md:grid-cols-2 md:grid-rows-1 lg:text-left	p-10 py-20">
      <div className="space-y-14 mb-8">
        <h1 className="font-bold text-6xl font[Plus Jakarta Sans] md:text-5xl">
          Introducing LearnBoost: The Ultimate Learning Mobile App
        </h1>
        <p className="font-medium text-lg">
          Are you ready to take your learning journey to new heights? Welcome to
          LearnBoost, the ultimate mbile app that empowers you to expand your
          knowledge,
        </p>
        <div className="flex gap-5 items-center justify-center cursor-pointer lg:justify-start">
          <Image src={googleplay} alt="" />
          <Image src={appstore} alt="" />
        </div>
      </div>
      <div className="relative ">
        <Image src={heroimage} alt="" />
        <Image
          src={herophone}
          alt=""
          className="absolute w-40 top-0 left-24 md:w-[258px] md:top-4 md:left-10 lg:top-0 lg:left-36"
        />
      </div>
    </section>
  );
};

export default HeroSection;
