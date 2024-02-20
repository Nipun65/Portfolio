const Navbar = () =>{
    return(<div className="bg-[#f66861] h-screen absolute right-0 top-0">
        <ul className="flex flex-col gap-32 mt-10 items-center">
            <li className="transform rotate-90 cursor-pointer w-fit hover:text-white transition hover:opacity-80 ease-in-out duration-500">Work</li>
            <li className="transform rotate-90 cursor-pointer w-fit hover:text-white transition hover:opacity-80 ease-in-out duration-500">Contact</li>
            <li className="transform rotate-90 cursor-pointer w-fit hover:text-white transition hover:opacity-80 ease-in-out duration-500">About</li>
        </ul>
    </div>)
}
export default Navbar