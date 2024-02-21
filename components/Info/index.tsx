import Image from "next/image";
import personal from "../../public/personal.jpg";
const Info = () => {
  return (
    <div className="bg-[#cbc4f7] xs:h-fit md:h-[90%] p-8 flex justify-center">
      <div className="text-left mt-6 flex xs:gap-8 sm:gap-16 xs:justify-start lg:justify-center xs:flex-col sm:flex-row items-center xs:mx-8 md:mx-32 lg:mx-40 container">
        <Image
          src={personal}
          alt="personal image"
          className="border-2 rounded-lg xs:h-40 xs:w-40 sm:h-30 sm:w-30 md:h-40 md:w-40 lg:h-60 lg:w-60"
        />
        <div className="flex flex-col gap-3 w-full">
          <div className="sm:text-4xl md:text-5xl lg:text-7xl text-[#004225] change-font transition ease-in-out duration-300">
            Hello!
          </div>

          <div className="xs:text-md md:text-xl lg:text-2xl">{`I'm Nipun, a Software Engineer committed to solving real-world problems with optimal solutions. I hold a Bachelor's degree in Information and Communication Technology from Dhirubhai Ambani Institute of Information and Technology, specializing in crafting user-friendly and visually appealing websites. Outside of work, I enjoy playing cricket, listening to music, and exploring new things. My ultimate goal is to enhance human life by leveraging technology to solve complex challenges.`}</div>
        </div>
      </div>
    </div>
  );
};
export default Info;
