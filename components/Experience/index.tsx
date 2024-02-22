import React from "react";

interface ExperienceProps {
  data: any;
}
const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <div className="flex justify-start xs:gap-2 sm:gap-16 md:gap-32 lg:gap-48 mb-6">
      <div>
        <p className="font-bold lg:mb-2 xs:mb-0 xs:text-xl md:text-2xl lg:text-3xl text-[#333333]">
          {data.company}
          <p className="font-bold opacity-80 xs:mb-0 lg:mb-3 xs:text-sm lg:text-xl">
            {data.role}
          </p>
        </p>
        <div className="text-[#666666] font-medium mb-3 text-left w-full xs:block lg:hidden text-nowrap xs:text-sm">
          <p>{data.location}</p>
          <p>{data.duration}</p>
        </div>
        <ul>
          {data.description.map((value: string) => (
            <li className="text-[#333333] font-medium list-disc" key={value}>
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-[#666666] text-right w-full text-nowrap xs:hidden lg:block lg:text-base  xs:text-sm">
        <p>{data.location}</p>
        <p>{data.duration}</p>
      </div>
    </div>
  );
};
export default Experience;
