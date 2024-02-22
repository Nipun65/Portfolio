"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div
      className={`backdrop-blur-sm z-50 xs:px-2 xs:py-2 md:px-6 md:py-4 lg:px-12 w-full py-6 xs:h-[8%] lg:h-[10%] flex justify-between items-center ${
        pathname === "/experience"
          ? "fixed bg-transparent"
          : "sticky bg-[#cbc4f7]"
      } items-center top-0`}
    >
      <Link
        className="xs:text-xl sm:text-xl md:text-3xl lg:text-4xl px-4 xs:tracking-tighter lg:tracking-[-0.1rem] font-normal font-['Mulish']"
        href={"/"}
        style={{ padding: "0" }}
      >
        Nipun Patel
      </Link>
      <ul className="flex xs:gap-2 md:gap-3  lg:gap-5 xs:text-xs md:text-lg lg:text-xl float-end">
        <Link
          className={`cursor-pointer w-fit hover:text-gray-300 transition hover:opacity-80 ease-in-out duration-500 ${
            pathname === "/" && "text-purple-500"
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`cursor-pointer w-fit hover:text-gray-300 transition hover:opacity-80 ease-in-out duration-500 ${
            pathname === "/experience" && "text-purple-500"
          }`}
          href="/experience"
        >
          Experience
        </Link>
        <Link
          className={`cursor-pointer w-fit hover:text-gray-300 transition ease-in-out duration-500 hover:opacity-80`}
          href="https://drive.google.com/file/d/13jKDAB_h1er5Vo-awbnYByPApuoiY3Zb/view"
          target="__blank"
        >
          Resume
        </Link>
      </ul>
    </div>
  );
};
export default Header;
