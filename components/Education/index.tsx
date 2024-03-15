import { EducationType } from "@/interfaces";

interface EducationProps {
  data: EducationType;
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <div className="flex justify-start xs:gap-2 sm:gap-16 md:gap-32 lg:gap-32 mb-6">
      <div className="flex flex-col">
        <p className="font-bold xs:mb-0 xs:text-lg md:text-2xl lg:text-3xl text-[#333333]">
          {data.university}
        </p>
        <p className="font-bold opacity-70 xs:mb-0 lg:mb-3 xs:text-sm lg:text-xl">
          {data.degree}
        </p>
        <div className="text-[#666666] font-medium mb-3 text-left w-fit xs:block lg:hidden text-nowrap xs:text-sm">
          <p>{data.location}</p>
          <p>{data.duration}</p>
        </div>
      </div>
      <div className="w-fit xs:hidden lg:block text-nowrap text-right text-[#666666]">
        <p>{data.location}</p>
        <p>{data.duration}</p>
      </div>
    </div>
  );
};

export default Education;
