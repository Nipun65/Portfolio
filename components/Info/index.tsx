"use client";
import Image from "next/image";
import personal from "../../public/personal.jpg";

const Info = () => {
  return (
    <section className="bg-[#cbc4f7] xs:h-fit md:h-[90%] p-8 flex justify-center">
      <div className="text-left mt-6 flex xs:gap-8 sm:gap-16 xs:justify-start lg:justify-center xs:flex-col sm:flex-row items-center xs:mx-8 md:mx-32 lg:mx-40 container">
        <Image
          src={personal}
          alt="personal image"
          className="border-2 rounded-lg xs:h-40 xs:w-40 sm:h-30 sm:w-30 md:h-40 md:w-40 lg:h-60 lg:w-60"
          priority
        />
        <div className="flex flex-col gap-3 w-full">
          <div className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#004225] change-font transition ease-in-out duration-300">
            Hello!
          </div>

          <div className="xs:text-md sm:text-lg md:text-xl lg:text-2xl intro">
            {`I'm Nipun, a Software Engineer with a passion for solving real-world challenges using optimal solutions. My specialization is in crafting user-friendly and visually appealing websites. Outside of work, I enjoy cricket, music and exploring new things.`}
            {/* &nbsp;
            <Link
              className="font-bold xs:text-md md:text-xl lg:text-2xl underline text-purple-500"
              href={"mailto:nipunpatel7@gmail.com"}
              target="__blank"
            >
              Let's Work Together.
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

 export default Info;
