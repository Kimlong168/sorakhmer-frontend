import {
  FaPhoneSquareAlt,
  FaShoppingCart,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from "../assets/images/sorakhmer-logo.png";
import SideBar from "./SideBar";
import { useState } from "react";
import ToggleLightDarkMode from "./ToggleLightDarkMode";
import NavLink from "./NavLink";
import NavLinkDropdown from "./NavLinkDropdown";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center p-1 px-8 ">
        <div className="flex items-center gap-2">
          <FaPhoneSquareAlt />
          <span>(+855) 12 345 678</span>
        </div>
        <div className="flex item-center gap-3">
          <FaFacebook />
          <FaYoutube />
          <FaTelegram />
        </div>
      </div>
      <header className="text-primary-content sticky top-0 bg-white z-[10] shadow-xl">
        <nav className="flex justify-between items-center gap-5 px-6 md:px-8 p-2 bg-primary-content text-white">
          <div className="flex item-center gap-10 md:gap-24">
            <div className="w-[80px] md:w-[100px]">
              <img src={logo} alt="logo" />
            </div>
            <ul className="hidden lg:flex items-center gap-8 font-bold uppercase">
              <li className="cursor-pointer">
                <NavLink href="#" title="Home" />
              </li>
              <li className="cursor-pointer">
                <NavLink href="#" title="Product" />
              </li>
              <li className="cursor-pointer">
                <NavLink href="#" title="Blog" />
              </li>

              <li className="cursor-pointer">
                <NavLink href="#" title="Contact" />
              </li>
              <li className="cursor-pointer">
                <NavLinkDropdown />
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-5 md:text-2xl">
            <ToggleLightDarkMode />
            <FaShoppingCart className="cursor-pointer hover:text-primary" />
            <div
              className="lg:hidden"
              onClick={() => setShowSideBar((prev) => !prev)}
            >
              {/* <MenuButton active={false} /> */}
              <HiOutlineMenuAlt3 className="cursor-pointer text-xl md:text-3xl hover:text-primary" />
            </div>
          </div>
        </nav>
      </header>
      <div>{showSideBar && <SideBar setShowSideBar={setShowSideBar} />}</div>
    </>
  );
};

export default Header;
