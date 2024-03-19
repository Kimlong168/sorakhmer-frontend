import { Link } from "react-router-dom";
import logo from "../assets/images/footer-logo.png";
import {
  FaCopyright,
  FaFacebook,
  FaPhoneSquareAlt,
  FaTelegram,
  FaMapMarkerAlt,
  FaLine,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import scrollToTop from "../utils/scrollTop";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import LinkIcon from "./ui/LinkIcon";
import convertToPhoneNumber from "../utils/convertToPhoneNumber";
const Footer = () => {
  const { contactList } = useContext(DataContext);
  const contactInfo = contactList.map((item) => item)[0];
  return (
    <div className=" bg-primary-content">
      <footer className="container text-white  flex flex-col lg:flex-row items-start lg:justify-between gap-12 py-10 px-6">
        {/* logo */}
        <div className="w-full p-0 lg:pr-10">
          <div className="w-[110px] mx-auto lg:mx-0">
            <img src={logo} alt="logo" />
          </div>
          <div className="mt-4 text-center lg:text-left">
            We create fine spirits that support post-demining sustainable
            community development.
          </div>
        </div>

        {/* useful links */}
        <div className="w-full">
          <h3 className="font-bold text-primary text-xl mb-4">Useful Links</h3>
          <div className="flex flex-col gap-2" onClick={scrollToTop}>
            <Link to="/" className="hover:text-primary-light hover:underline">
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-primary-light hover:underline"
            >
              Shop
            </Link>
            <Link
              to="/blogs"
              className="hover:text-primary-light hover:underline"
            >
              Blogs
            </Link>
            <Link
              to="/process"
              className="hover:text-primary-light hover:underline"
            >
              Process
            </Link>
            <Link
              to="/distillery"
              className="hover:text-primary-light hover:underline"
            >
              Distillery
            </Link>
            <Link
              to="/about"
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

        {/* contact information */}
        <div className="w-full">
          <h3 className="font-bold text-primary text-xl mb-4">Contact Us</h3>
          <div className="flex flex-col gap-4">
            {contactInfo ? (
              <>
                <Link
                  to={`tel:${contactInfo.phoneNumber}`}
                  className="flex items-center gap-2 hover:text-primary-light hover:underline"
                >
                  <FaPhoneSquareAlt />
                  <span>
                    (855) {convertToPhoneNumber(contactInfo.phoneNumber)}
                  </span>
                </Link>
                <Link
                  to={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 hover:text-primary-light hover:underline"
                >
                  <MdEmail />
                  <span>{contactInfo.email}</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="tel:012739573"
                  className="flex items-center gap-2 hover:text-primary-light hover:underline"
                >
                  <FaPhoneSquareAlt />
                  <span>(855) 012 739 573</span>
                </Link>
                <Link
                  to="mailto:hongmean2002@yahoo.com"
                  className="flex items-center gap-2 hover:text-primary-light hover:underline"
                >
                  <MdEmail />
                  <span>hongmean2002@yahoo.com</span>
                </Link>
              </>
            )}

            <Link
              to="https://maps.app.goo.gl/GWBq9PAQotji4jceA"
              className="flex items-center gap-2 hover:text-primary-light hover:underline"
            >
              <FaMapMarkerAlt />
              <span>Battambang, Cambodia</span>
            </Link>
          </div>
        </div>

        {/* social media */}
        <div className="w-full">
          <h3 className="font-bold text-primary text-xl mb-4">Follow Us</h3>
          <div className="flex item-center gap-5 text-3xl">
            {contactInfo ? (
              contactInfo.socialMedia.map((item, index) => (
                <Link
                  to={item.url}
                  key={index}
                  className="hover:text-primary-light hover:underline"
                >
                  <LinkIcon title={item.title} size={32} />
                </Link>
              ))
            ) : (
              <>
                <Link
                  to="https://www.facebook.com/sorakhmer1"
                  className="hover:text-primary-light hover:underline"
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="https://line.me/ti/p/KqXNVPfm2p"
                  className="hover:text-primary-light hover:underline"
                >
                  <FaLine />
                </Link>
                <Link
                  to="https://t.me/+85512739573"
                  className="hover:text-primary-light hover:underline"
                >
                  <FaTelegram />
                </Link>
              </>
            )}
          </div>
        </div>
      </footer>
      <div className="bg-primary-dark w-[90%] h-[1px] mx-auto"></div>
      {/* copyright */}
      <div className=" py-4 text-white flex justify-center items-center gap-2 text-sm">
        <FaCopyright />
        2024 Copyright, Sorakhmer. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
