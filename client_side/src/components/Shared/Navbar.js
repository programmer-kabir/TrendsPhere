"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { MdArrowForwardIos } from "react-icons/md";
import { FaArrowRightToBracket, FaRegHeart } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import DropDown from "../DropDown";
import MobileDropDown from "../MobileDropDown";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = true; // Replace with auth logic
  const logOut = () => {}; // Replace with real logout

  const handleNav = () => setNav(!nav);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    handleScroll(); // check once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = {
    Mens: [
      { name: "CASUAL", link: "products/MAN'S-CASUAL" },
      { name: "FORMAL", link: "products/MAN'S-FORMAL" },
      { name: "SPORTS", link: "products/MAN'S-SPORT" },
    ],
    Womens: [
      { name: "CASUAL", link: "products/WOMEN'S-CASUAL" },
      { name: "FORMAL", link: "products/WOMEN'S-FORMAL" },
      { name: "SPORTS", link: "products/WOMEN'S-SPORT" },
    ],
    Kids: [
      { name: "FORMAL", link: "products/KID'S-FORMAL" },
      { name: "CASUAL", link: "products/KID'S-CASUAL" },
      { name: "SPORTS", link: "products/KID'S-SPORT" },
    ],
  };

  return (
    <div className="bg-white">
      <nav
        className={`fixed w-full z-50 border-b border-gray-300 bg-white transition-all duration-300 ${
          pathname === "/" ? (scrolled ? "shadow-sm  " : "") : "shadow"
        }`}
      >
        <div className="flex items-center justify-between gap-6 py-3 md:py-2 px-4 ">
          <Link href="/">
            <Image src="https://iili.io/3ejP3H7.png" className="md:w-1/4 w-[80px]" width={100} height={100} alt="Logo" />
          </Link>

          <div className="hidden md:flex gap-6">
            <DropDown name="Men's" items={menuItems.Mens} />
            <DropDown name="Women's" items={menuItems.Womens} />
            <DropDown name="Kid's" items={menuItems.Kids} />
          </div>

          <div className="hidden md:flex items-center gap-5">
            <div className="w-64 py-2 px-4 bg-gray-200 rounded-full flex items-center">
              <FiSearch className="text-primary" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none ml-3 w-full text-sm text-black"
              />
            </div>

            <Link href="/wishlist" className="relative">
              <FaRegHeart color="#f50400" size={23} />
              <span className="absolute -top-2 left-4 w-5 h-5 text-xs flex items-center justify-center rounded-full bg-[#f50400] text-white border-2 border-white">
                {/* Wishlist count */}
              </span>
            </Link>

            {user ? (
              <button
                onClick={logOut}
                className="flex items-center gap-2 px-4 py-2 border bg-[#f50400] text-white hover:bg-transparent hover:text-[#398EFA] hover:border-[#398EFA] rounded transition-all"
              >
                <LuUser size={18} />
                <span className="text-sm font-bold uppercase">Logout</span>
              </button>
            ) : (
              <Link href="/login">
                <button className="flex items-center gap-2 px-4 py-2 border bg-[#f50400] text-white hover:bg-transparent hover:text-[#398EFA] hover:border-[#398EFA] rounded transition-all">
                  <LuUser size={18} />
                  <span className="text-sm font-bold uppercase">Login</span>
                </button>
              </Link>
            )}
          </div>

          <div onClick={handleNav} className="block md:hidden cursor-pointer">
            <HiOutlineMenuAlt3 size={28} />
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed top-0 right-0 w-full h-full bg-white z-50 transform transition-transform duration-500 ${
            nav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between p-5 border-b">
            <Image src="https://iili.io/3ejP3H7.png" width={100} height={100} alt="Logo" />
            <button onClick={handleNav}>
              <RxCross2 className="text-[#4d4f53] cursor-pointer hover:text-white border p-2 transition-background transition-text  duration-300 ease-in-out  hover:bg-[#F62977] rounded-full " size={40} />
            </button>
          </div>
          <div className="flex flex-col items-start px-6 py-4 gap-4 text-black">
            <MobileDropDown name="Men's" items={menuItems.Mens} />
            <MobileDropDown name="Women's" items={menuItems.Womens} />
            <MobileDropDown name="Kid's" items={menuItems.Kids} />
            <button className="bg-[#F50963] flex gap-2 items-center mt-4 px-5 py-3 rounded text-white">
              <span>Getting Started</span>
              <MdArrowForwardIos size={18} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
