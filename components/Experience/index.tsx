import { ExperienceType } from "@/interfaces";
import React from "react";

interface ExperienceProps {
  data: ExperienceType;
}
const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <div className="flex justify-start xs:gap-2 sm:gap-16 md:gap-32 lg:gap-32 mb-6">
      <div>
        <p className="font-bold xs:mb-0 xs:text-lg md:text-2xl lg:text-3xl text-[#333333]">
          {data.company}
        </p>
        <p className="font-bold opacity-70 xs:mb-0 lg:mb-3 xs:text-sm lg:text-xl">
          {data.role}
        </p>
        <div className="text-[#666666] font-medium mb-3 text-left w-fit xs:block lg:hidden xs:text-wrap sm:text-nowrap xs:text-sm">
          <p>{data.location}</p>
          <p>{data.duration}</p>
        </div>
        <ul>
          {data.description.map((value: string) => (
            <li
              className="text-[#333333] xs:text-sm md:text-base lg:text-lg font-medium list-disc"
              key={value}
              dangerouslySetInnerHTML={{ __html: value }}
            ></li>
          ))}
        </ul>
      </div>
      <div className="text-[#666666] text-right w-fit xs:text-wrap md:text-nowrap xs:hidden lg:block lg:text-base xs:text-sm">
        <p>{data.location}</p>
        <p>{data.duration}</p>
      </div>
    </div>
  );
};
export default Experience;
