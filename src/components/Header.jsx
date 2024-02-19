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
import ToggleLightDarkMode from "./ui/ToggleLightDarkMode";
import NavLink from "./ui/NavLink";
import NavLinkDropdown from "./ui/NavLinkDropdown";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import scrollToTop from "../utils/scrollToTop";
import { Link } from "react-router-dom";
const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      {/* telephone and social media icon */}
      <div className="flex justify-between items-center p-1 px-8 ">
        <div className="flex items-center gap-2">
          <FaPhoneSquareAlt />
          <Link to="tel:+1234567890">(855) 123-456-7890</Link>
        </div>
        <div className="flex item-center gap-3">
          <FaFacebook />
          <FaYoutube />
          <FaTelegram />
        </div>
      </div>

      {/* header */}
      <header className="text-primary-content sticky top-0 bg-white z-[10] shadow-xl">
        <nav className="flex justify-between items-center gap-5 px-6 md:px-8 p-2 bg-primary-content text-white">
          <div
            className="flex item-center gap-10 md:gap-24"
            onClick={scrollToTop}
          >
            {/* logo */}
            <Link to="/">
              <div className="w-[80px] md:w-[100px]">
                <img src={logo} alt="logo" />
              </div>
            </Link>

            {/* tab */}
            <ul className="hidden lg:flex items-center gap-8 font-bold uppercase">
              <li className="cursor-pointer">
                <NavLink href="/" title="Home" />
              </li>
              <li className="cursor-pointer">
                <NavLink href="/products" title="Product" />
              </li>
              <li className="cursor-pointer">
                <NavLink href="/blogs" title="Blog" />
              </li>

              <li className="cursor-pointer">
                <NavLink href="/contact" title="Contact" />
              </li>
              <li className="cursor-pointer">
                <NavLinkDropdown />
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-5 md:text-2xl">
            {/* light and dark mode icon */}
            <ToggleLightDarkMode />
            {/* shopping cart icon */}
            <FaShoppingCart className="cursor-pointer hover:text-primary" />
            {/* menu icon */}
            <div
              className="lg:hidden"
              onClick={() => setShowSideBar((prev) => !prev)}
            >
              <HiOutlineMenuAlt3 className="cursor-pointer text-xl md:text-3xl hover:text-primary" />
            </div>
          </div>
        </nav>
      </header>

      {/* side bar for small screen */}
      <div>
        <SideBar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      </div>
    </>
  );
};

export default Header;
