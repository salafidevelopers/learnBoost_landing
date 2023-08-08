import Image from "next/image";
import learnboost from "../../public/learnboost.png";

const NavBar = () => {
  return (
    <nav className="bg-[#F8F9FF] flex justify-between items-center p-5 px-10">
      <div className="list-none cursor-pointer flex items-center justify-between gap-20">
        <Image src={learnboost} alt="" />
        <li className="hover:underline hover:font-bold">Home</li>
        <li className="hover:underline hover:font-bold">Features</li>
        <li className="hover:underline hover:font-bold">Pricing</li>
        <li className="hover:underline hover:font-bold">Testimonial</li>
      </div>
      <button className="bg-[#267D2F] text-white p-2 px-4 rounded-md">
        ContactUs
      </button>
    </nav>
  );
};

export default NavBar;
