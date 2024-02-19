import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const ContactSection = () => {
  // get user email to cc to the user when they submit the contact form
  const [userEmail, setUserEmail] = useState("");

  return (
    <section className="container p-8 md:p-0">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 pt-12 md:py-12">
        {/* contact information */}
        <div className="w-full">
          {/* map */}
          <div>
            <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl ">
              Our Company<span className="text-primary font-bold">.</span>
            </h3>
            <p className="pt-8 pb-2">
              #45, st. 59, Au anlok village, Tasen commune, Kamrieng district,
              Battambang Province, Cambodia.
            </p>
            <div>
              {/* google map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376179.8368609776!2d103.5552563901511!3d12.003517282077828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3104b5c321b14653%3A0x37f19d875254fa2b!2sKhmer%20Jyoryu%20company!5e0!3m2!1skm!2skh!4v1707702223808!5m2!1skm!2skh"
                className="w-full lg:w-[75%]"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* contact info */}
          <div className="mt-10">
            <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl ">
              Our Contact<span className="text-primary font-bold">.</span>
            </h3>
            <div className="pt-6 pb-3">
              <div className=" hover:text-primary hover:underline cursor-pointer w-fit">
                <p>
                  Phone: <Link to="tel:+1234567890">123-456-7890</Link>
                </p>
              </div>
              <div className=" hover:text-primary hover:underline cursor-pointer w-fit">
                <p>
                  Email:{" "}
                  <Link to="mailto:example@example.com">
                    example@example.com
                  </Link>
                </p>
              </div>
              <div className=" hover:text-primary hover:underline cursor-pointer w-fit">
                <p>
                  Telegram: <Link to="/contact">@sorakhmer</Link>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-2xl ">
              <Link to="/">
                <FaFacebook className=" hover:text-primary hover:underline cursor-pointer" />
              </Link>
              <Link to="/">
                <FaYoutube className=" hover:text-primary hover:underline cursor-pointer" />
              </Link>
              <Link to="/">
                <FaTelegram className=" hover:text-primary hover:underline cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="w-full">
          <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl ">
            Send a message<span className="text-primary font-bold">.</span>
          </h3>

          {/* form submit message */}
          <form
            action="https://formsubmit.co/kimlong5244@gmail.com"
            method="POST"
          >
            {/* subject of the email */}
            <input
              type="hidden"
              name="_subject"
              value="New message from a customer of Sorakhmer.com"
            />
            {/* templete of the email */}
            <input type="hidden" name="_template" value="table"></input>
            <input type="hidden" name="_captcha" value="false" />
            {/* cc of the email */}
            <input type="hidden" name="_cc" value={userEmail}></input>

            {/* next url after sumbit successfully */}
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5173/thank"
            />
            <div className="flex flex-col gap-3.5 mt-5 md:mt-8">
              <div className="flex flex-col gap-1">
                <label>Fullname</label>
                <input
                  className="border border-border focus:border-primary outline-none p-2.5"
                  type="text"
                  name="Fullname"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Email</label>
                <input
                  className="border border-border focus:border-primary outline-none p-2.5"
                  type="email"
                  name="Email"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Phone</label>
                <input
                  className="border border-border focus:border-primary outline-none p-2.5"
                  type="tel"
                  name="Phone"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Country</label>
                <input
                  className="border border-border focus:border-primary outline-none p-2.5"
                  type="text"
                  name="Country"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Message</label>
                <textarea
                  className="border border-border focus:border-primary outline-none p-2.5"
                  name="Description"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="border-2 border-dashed border-primary bg-white px-6 py-3 font-semibold uppercase text-primary transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-[4px_4px_0px_rgb(245,156,0)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
