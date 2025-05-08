import Link from "next/link";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";

const MobileDropDown = ({ name, items }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  // console.log(items);
  return (
    <div className="w-full">
      <div className="flex w-full border-b border-gray-300 pb-2 text-left items-center justify-between">
        <p className="mr-1 text-black font-medium">{name}</p>
        <button
          className="transition-all duration-300 text-black border border-gray-300 hover:text-white hover:bg-[#F62977]"
          onClick={toggleDropDown}
        >
          <GoPlus
            size={27}
            className={`${
              isDropDownOpen
                ? "rotate-45 transition-all ease-out duration-300 "
                : "transition-all ease-out duration-30"
            }`}
          />
        </button>
      </div>
      {isDropDownOpen && (
        <div className=" px-10">
          {items.map((item) => (
            <Link href={`${item.link}`}>
              <p className="border-b border-gray-300 py-2 font-medium text-black cursor-pointer hover:text-[#F62977] text-left">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileDropDown;
