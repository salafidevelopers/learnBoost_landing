import Image from "next/image";
import smallappstore from "../../public/smallappstore.png";
import smallgooglestore from "../../public/smallgooglestore.png";
import twitter from "../../public/twitter.png";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] p-10 grid grid-cols-1 grid-row-2 gap-20 py-20">
      <div className="flex flex-col gap-20 md:flex-row md:justify-between text-white ">
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm">Company </h4>
            <p className="font-normal text-xs">About </p>
            <p className="font-normal text-xs">Features</p>
            <p className="font-normal text-xs">Works</p>
            <p className="font-normal text-xs">Career </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm">Help</h4>
            <p className="font-normal text-xs">Customer Support</p>
            <p className="font-normal text-xs">Free eBooks</p>
            <p className="font-normal text-xs">Terms & Conditions</p>
            <p className="font-normal text-xs">Privacy Policy </p>
          </div>
        </div>

        <div>
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-white">Install App</h4>
            <div className="flex gap-5 ">
              <Image src={smallappstore} alt="" />
              <Image src={smallgooglestore} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className=" text-white">
          <p className="font-normal text-[12px]">
            © Copyright 2022, Made with 💖 by Royal DAYFIELD INVESTMENT limited
          </p>
        </div>
        <div className="flex gap-6">
          <Image src={twitter} alt="" />
          <Image src={facebook} alt="" />
          <Image src={instagram} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
