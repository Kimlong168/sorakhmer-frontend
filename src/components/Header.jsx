import {
  FaPhoneSquareAlt,
  FaShoppingCart,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from "../assets/images/sorakhmer-logo.png";
import SideBar from "./SideBar";
import { useContext, useState } from "react";
import ToggleLightDarkMode from "./ui/ToggleLightDarkMode";
import NavLink from "./ui/NavLink";
import NavLinkDropdown from "./ui/NavLinkDropdown";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import scrollToTop from "../utils/scrollTop";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import LinkIcon from "./ui/LinkIcon";
import convertToPhoneNumber from "../utils/convertToPhoneNumber";
import scrollTop from "../utils/scrollTop";
const Header = () => {
  const { contactList } = useContext(DataContext);
  const { cartItems } = useContext(DataContext);
  const contactInfo = contactList.map((item) => item)[0];
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      {/* telephone and social media icon */}
      <div className="flex justify-between items-center p-1 px-8 ">
        {/* phone number */}
        <div className="flex items-center gap-2">
          <FaPhoneSquareAlt />
          {contactInfo ? (
            <Link to={`tel:${contactInfo.phoneNumber}`}>
              (855) {convertToPhoneNumber(contactInfo.phoneNumber)}
            </Link>
          ) : (
            <Link to="tel:012739573">(855) 012 739 573</Link>
          )}
        </div>

        {/* social media icon */}
        <div className="flex item-center gap-3">
          {contactInfo ? (
            contactInfo.socialMedia.map((item, index) => (
              <Link to={item.url} key={index}>
                <LinkIcon title={item.title} size={18} />
              </Link>
            ))
          ) : (
            <>
              <Link to="https://www.facebook.com/sorakhmer1">
                <FaFacebook />
              </Link>

              <Link to="#">
                <FaYoutube />
              </Link>

              <Link to="#">
                <FaTelegram />
              </Link>
            </>
          )}
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
                <NavLink href="/products" title="Products" />
              </li>
              <li className="cursor-pointer">
                <NavLink href="/blogs" title="Blogs" />
              </li>

              <li className="cursor-pointer">
                <NavLink href="/contact" title="Contact" />
              </li>
              <li className="cursor-pointer">
                <NavLinkDropdown />
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6 md:gap-5 text-xl md:text-2xl">
            {/* light and dark mode icon */}
            <ToggleLightDarkMode />
            {/* shopping cart icon */}
            <Link to="/cart">
              <div onClick={scrollTop} className="relative">
                <FaShoppingCart
                  size={28}
                  className="cursor-pointer hover:text-primary"
                />

                {cartItems.length > 0 && (
                  <div className="text-xs bg-red-500 w-4 h-4 rounded-full grid place-content-center absolute -top-1 -right-2">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>
            {/* menu icon */}
            <div
              className="lg:hidden"
              onClick={() => setShowSideBar((prev) => !prev)}
            >
              <HiOutlineMenuAlt3
                size={32}
                className="cursor-pointer text-2xl md:text-3xl hover:text-primary"
              />
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
