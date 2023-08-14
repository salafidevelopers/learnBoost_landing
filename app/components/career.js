import Image from "next/image";
import careerimg from "../../public/careerimg.png";
import share from "../../public/share.png";
import curicullum from "../../public/curicullum.png";

const Career = () => {
  return (
    <div className="bg-[#1F2029] flex items-center justify-between gap-10 p-7">
      <Image src={careerimg} alt="" />
      <div className="text-white space-y-5">
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
    </div>
  );
};

export default Career;
