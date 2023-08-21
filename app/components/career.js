import Image from "next/image";
import careerimg from "../../public/careerimg.png";
import careerphone from "../../public/careerphone.png";
import share from "../../public/share.png";
import curicullum from "../../public/curicullum.png";

const Career = () => {
  return (
    <section className="bg-[#1F2029] pt-12 grid lg:grid-cols-2 lg:grid-rows-1 gap-10 px-7">
      <div className="relative">
        <Image
          src={careerimg}
          alt=""
          className="order-last md:order-first md:self-end "
        />
        <Image
          src={careerphone}
          alt=""
          className=" absolute top-[12.7px] left-6 md:top-5 md:left-12 lg:top-[11.5px] lg:left-12 w-60 md:w-[422px]"
        />
      </div>

      <div className="text-white space-y-5 order-first md:self-end">
        <h2 className="font-bold text-3xl">
          Accelerate Your Career and Personal Growth
        </h2>
        <p className="font-normal text-base">
          Learning becomes effective when it feels like play! Our app includes
          educational games and quizzes that turn lessons into exciting
          challenges, encouraging kids to learn while having fun.
        </p>
        <div className="flex gap-5">
          <div className="space-y-3">
            <Image src={share} alt="" />
            <h4 className="font-bold text-lg"> Personalized Learning Paths</h4>
            <p>
              Every child is unique, and so is their learning journey.
              LearnBoost offers personalized learning paths that adapt to your
              child&apos;s pace and learning style.
            </p>
          </div>
          <div className="space-y-3">
            <Image src={curicullum} alt="" />
            <h4 className="font-bold text-lg"> Curriculum Aligned</h4>
            <p>
              Rest assured, our lessons are carefully crafted to align with
              school curriculums, ensuring seamless integration with classroom
              learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
