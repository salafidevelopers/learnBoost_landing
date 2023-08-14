import Image from "next/image";
import right_arrow from "../../public/right_arrow.png";
import left_arrow from "../../public/left_arrow.png";
import learnboost_testimonial from "../../public/learnboost_testimonial.png";

const Testimonial = () => {
  return (
    <section className="p-10">
      <div className="text-center space-y-3">
        <h1 className="font-bold text-5xl ">
          Hear from Our Happy <br />
          Learners
        </h1>
        <p>
          Join our growing community of happy learners and unlock the full
          potential of your child&apos;s <br /> education with LearnBoost.{" "}
        </p>
      </div>
      <div className="flex justify-center items-center gap-20 mt-20">
        <Image src={learnboost_testimonial} alt="" />
        <div className="bg-[#E8FFEA] space-y-20 p-12 h-full rounded-lg">
          <p>
            As a teacher, I&apos;ve noticed a remarkable improvement in my
            students&apos; enthusiasm for learning. The engaging lessons and
            interactive games have sparked a genuine interest in learning.
            LearnBoost&apos;s personalized learning paths have helped each child
            unlock their potential and excel in their studies.
          </p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-xl">
              Mrs. Johnson, <br />
              Primary School Teacher
            </p>
            <div className="flex items-center justify-center gap-5">
              <Image src={left_arrow} alt="" />
              <Image src={right_arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
