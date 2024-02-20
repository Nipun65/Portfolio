import { constants } from "@/utilities";
import Link from "next/link";

const Skills = () =>{
    return(
    <section className="p-12 bg-[#cbc4f7] relative">
    <h3 className="xs:text-xl md:text-3xl lg:text-4xl mb-2 font-bold text-[#333333]">Skills</h3>
    <div className="place-items-center my-6 grid grid-flow-row grid-cols-4 gap-3 z-20">
    {constants?.SKILLS?.map((skill:any)=>
        <Link        
        href={skill.link}
        target="__blank"
        className="text-center w-fit flex flex-col items-center">
        <img src={skill.logo.src} alt="skill-img-tag" className="xs:h-10 xs:w-10 lg:h-14 lg:w-14 hover:scale-105 hover:transition ease-in-out backdrop-filter" />
        <p className="font-bold xs:text-sm md:text-base">{skill.skill}</p>
      </Link> 
    )}
    </div>
  </section>
  )
}
export default Skills;