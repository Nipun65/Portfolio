'use client'
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Header = () =>{
const pathname = usePathname()
    return(<div className={`xs:px-4 xs:py-2 md:px-6 md:py-4 lg:px-12 w-full py-6 xs:h-[8%] lg:h-[12%] flex justify-between ${pathname!=='/work' && 'bg-[#cbc4f7]'} items-center top-0`}>
         <Link className="xs:text-xl sm:text-xl md:text-3xl lg:text-5xl px-4 xs:tracking-tighter  lg:tracking-[-0.1rem] font-normal font-['Mulish']" href={"/"}>Nipun Patel</Link>
         <ul className="flex xs:gap-2 md:gap-3  lg:gap-5 xs:text-xs md:text-lg lg:text-xl float-end">
    <Link className={`cursor-pointer w-fit hover:text-gray-300 transition hover:opacity-80 ease-in-out duration-500 ${pathname==='/' && 'text-purple-500'}`} href='/'>Home</Link>
            <Link className={`cursor-pointer w-fit hover:text-gray-300 transition hover:opacity-80 ease-in-out duration-500 ${pathname==='/work' && 'text-purple-500'}`} href='/work'>Work</Link>
            <Link className={`cursor-pointer w-fit hover:text-gray-300 transition ease-in-out duration-500 hover:opacity-80`} href='https://drive.google.com/file/d/13jKDAB_h1er5Vo-awbnYByPApuoiY3Zb/view' target="__blank">Resume</Link>
         </ul>
    </div>)
}
export default Header;