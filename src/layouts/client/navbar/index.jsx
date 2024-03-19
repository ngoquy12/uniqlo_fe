import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../../../public/images/logo-header.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-40 w-full h-[72px] bg-white py-0 border-b border-solid border-b-[rgb(204, 204, 204)]">
        <div className="py-0 px-5 my-0 mx-[124px] h-full flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Link className="mr-[28px]">
              <img src={Logo} alt="Logo" />
            </Link>
            <ul className="flex gap-4">
              <li className="uppercase font-semibold hover:text-[#424242] cursor-pointer">
                Nam
              </li>
              <li className="uppercase font-semibold hover:text-[#424242] cursor-pointer">
                Nữ
              </li>
              <li className="uppercase font-semibold hover:text-[#424242] cursor-pointer">
                Trẻ em
              </li>
              <li className="uppercase font-semibold hover:text-[#424242] cursor-pointer">
                Trẻ sơ sinh
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-8">
            <SearchIcon className="cursor-pointer text-[24px]" />
            <PersonIcon className="cursor-pointer text-[24px]" />
            <div className="relative">
              <FavoriteBorderIcon className="cursor-pointer text-[24px]" />
              <span className="absolute px-2 py-0 rounded-full top-[-3px] right-[-18px] text-[10px] bg-[#EB3333] text-white font-semibold">
                2
              </span>
            </div>
            <div className="relative">
              <ShoppingCartIcon className="cursor-pointer text-[24px]" />
              <span className="absolute px-2 py-0 rounded-full top-[-3px] right-[-18px] text-[10px] bg-[#EB3333] text-white font-semibold">
                2
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
