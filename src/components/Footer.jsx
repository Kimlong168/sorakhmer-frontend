import { Link } from "react-router-dom";
import logo from "../assets/images/footer-logo.png";
import {
  FaCopyright,
  FaFacebook,
  FaPhoneSquareAlt,
  FaTelegram,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className=" bg-primary-content">
      <footer className="container text-white  flex flex-col lg:flex-row items-start lg:justify-between gap-12 py-10 px-6">
        <div className="w-full p-0 lg:pr-10">
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
            <Link to="/" className="hover:text-primary-light hover:underline">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-primary-light hover:underline"
            >
              Product
            </Link>
            <Link
              to="/product"
              className="hover:text-primary-light hover:underline"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary-light hover:underline"
            >
              Process
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary-light hover:underline"
            >
              Distillery
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary-light hover:underline"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary-light hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="w-full">
          <h3 className="font-bold text-primary text-xl mb-4">Contact Us</h3>
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-primary-light hover:underline"
            >
              <FaPhoneSquareAlt /> <span>(855) 086 861 256</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 hover:text-primary-light hover:underline"
            >
              <MdEmail /> <span>example@gmail.com</span>
            </Link>
            <Link
              to="/product"
              className="flex items-center gap-2 hover:text-primary-light hover:underline"
            >
              <FaMapMarkerAlt /> <span>Battambang, Cambodia</span>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-bold text-primary text-xl mb-4">Follow Us</h3>
          <div className="flex item-center gap-5 text-3xl">
            <Link to="/" className="hover:text-primary-light hover:underline">
              <FaFacebook />
            </Link>
            <Link
              to="/about"
              className="hover:text-primary-light hover:underline"
            >
              <FaYoutube />
            </Link>
            <Link
              to="/product"
              className="hover:text-primary-light hover:underline"
            >
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
