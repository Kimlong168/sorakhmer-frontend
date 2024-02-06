import { Link } from "react-router-dom";
import logo from "../assets/images/footer-logo.png";
import {
  FaCopyright,
  FaFacebook,
  FaMailBulk,
  FaMap,
  FaPhone,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-primary-content">
      <footer className="container text-white  flex flex-col lg:flex-row items-start lg:justify-between gap-12 py-10 px-6">
        <div className="w-full pr-10">
          <div className="w-[110px] mx-auto lg:mx-0">
            <img src={logo} alt="logo" />
          </div>
          <div className="mt-4 text-center lg:text-left">
            We create fine spirits that support post-demining sustainable
            community development.
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-bold text-primary text-xl mb-4">Useful Links</h3>
          <div className="flex flex-col gap-2">
            <Link to="/">Home</Link>
            <Link to="/about">Product</Link>
            <Link to="/product">Blog</Link>
            <Link to="/contact">Process</Link>
            <Link to="/contact">Distillery</Link>
            <Link to="/contact">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="w-full">
          <h3 className="font-bold text-primary text-xl mb-4">Contact Us</h3>
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <FaPhone /> <span>(855) 086 861 256</span>
            </Link>
            <Link to="/about" className="flex items-center gap-2">
              <FaMailBulk /> <span>example@gmail.com</span>
            </Link>
            <Link to="/product" className="flex items-center gap-2">
              <FaMap /> <span>Battambang, Cambodia</span>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-bold text-primary text-xl mb-4">Follow Us</h3>
          <div className="flex item-center gap-5 text-3xl">
            <Link to="/">
              <FaFacebook />
            </Link>
            <Link to="/about">
              <FaYoutube />
            </Link>
            <Link to="/product">
              <FaTelegram />
            </Link>
          </div>
        </div>
      </footer>
      <div className="bg-primary-dark w-[90%] h-[1px] mx-auto"></div>
      <div className=" py-4 text-white flex justify-center items-center gap-2 text-sm">
        <FaCopyright />
        2024 Copyright, Sorakhmer. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
