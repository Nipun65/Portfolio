import Image from "next/image";
import project from "@/public/project.jpg";
import Link from "next/link";
import { Project } from "@/interfaces";

interface CardProps {
  data: Project;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <Link
      className="rounded-lg group border min-h-64 min-w-72 shadow-sm card-tag"
      href={data.link}
      target="__blank"
    >
      <div className="relative h-full group-hover:backdrop-filter">
        <Image
          src={project}
          alt="project icon"
          className="w-full h-32 rounded-t-lg"
        />
        <div className="p-3">
          <p className="text-[#333333] text-xl font-bold">{data.name}</p>
          <p className="text=[#666666] text-sm">{data.description}</p>
        </div>
        <div className="bg-[#131313] h group-hover:block group-hover:backdrop-blur-xl absolute hidden rounded-lg h-full w-full top-0 opacity-25" />
        <p className="absolute right-2 bottom-2">
          {"</"}
          {data.language}
          {">"}
        </p>
      </div>
    </Link>
  );
};

export default Card;
