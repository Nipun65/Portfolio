import Image from "next/image";
import project from '@/public/project.jpg'
import Link from "next/link";

interface CardProps {
data:any
}

const Card:React.FC<CardProps> = ({data}) =>{
    return(<Link className="rounded-lg group border-2 min-h-64 min-w-72 shadow-sm" href={data.link} target="__blank">
        <div className="relative h-full group-hover:backdrop-filter">
        <Image src={project} alt="project icon" className="w-full h-32 rounded-lg"/>
        <div className="p-3">
        <p className="text-[#333333] text-xl font-bold">{data.name}</p>
        <p className="text=[#666666] text-sm">{data.description}</p>
        
        </div>
        <div className="bg-[#131313] h group-hover:block absolute hidden border rounded-lg h-full w-full top-0 opacity-25"/>
        <p className="absolute right-2 bottom-2">{"</"}{data.language}{">"}</p>
        </div>
    </Link>)

}

export default Card;