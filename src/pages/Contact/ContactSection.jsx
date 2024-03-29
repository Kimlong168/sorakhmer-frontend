import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LinkIcon from "../../components/ui/LinkIcon";
import { DataContext } from "../../contexts/DataContext";
import convertToPhoneNumber from "../../utils/convertToPhoneNumber";
import SuccessModal from "../../components/ui/SuccessModal";
import axios from "axios"; // Make sure axios is installed via npm or yarn
import WarningModal from "../../components/ui/WarningModal";
import RedStar from "../../components/ui/RedStar";
const ContactSection = () => {
  // get user email to cc to the user when they submit the contact form
  const { contactList, language } = useContext(DataContext);
  const contactInfo = contactList.map((item) => item)[0];
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    address: "",
    description: "",
    email: "",
    socialMediaLink: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isShowWarning, setIsShowWarning] = useState(false);

  // handle send message to telegram
  //bot token
  var telegram_bot_id = contactInfo
    ? contactInfo.telegramBotId
    : "6882060062:AAFvZvxBHu1kqu_n5BgPpsx4V1dGoSqHXBw";
  //chat id
  // var chat_id = "@sorakhmerCustomerOrder"; //can only send to the public channel
  var chat_id = contactInfo ? contactInfo.chatId : "-1002126940474"; //channel id : we can send to both private and public channel

  const sendToTelegram = (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.description) {
      setIsShowWarning(true);
      return;
    }

    // Send customer contact and information to telegram
    try {
      const send = async () => {
        const messageToSend = `===== New Message =====\n\nDate: ${new Date().toLocaleString()}
          ${formData.fullname ? `\nName: ${formData.fullname}` : ""}
          ${
            formData.socialMediaLink
              ? `\nSocial Media: ${formData.socialMediaLink}`
              : null
          }
          ${formData.phone ? `\nPhone Number: ${formData.phone}` : ""}
          ${formData.address ? `\nAddress: ${formData.address}` : ""}
          ${formData.email ? `\nEmail: ${formData.email}` : ""}
          ${formData.description ? `\nMessage: ${formData.description}` : ""}
       `;

        await axios.post(
          `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
          {
            chat_id: chat_id,
            text: messageToSend,
          }
        );
        console.log("Message sent successfully!");
      };

      // excute function to send message to telegram
      send();

      // set submitted to true to show success modal
      setIsSubmitted(true);

      // clear form data
      setFormData({
        fullname: "",
        phone: "",
        address: "",
        description: "",
        email: "",
        socialMediaLink: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // handle input change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="container p-8 md:pt-0">
      <div className="flex flex-col lg:flex-row gap-12 md:gap-18 lg:gap-24 pt-12 md:py-12">
        {/* contact information */}
        <div className="w-full">
          {/* map */}
          <div>
            <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl ">
              {language == "en" ? "Our Company" : "ក្រុមហ៊ុនខ្មែរយ៉ូរីយូ"}
              <span className="text-primary font-bold">.</span>
            </h3>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* company address */}
              <div className="pt-8 mb-4 lg:prose-xl ">
                {language == "en"
                  ? "  #45, st. 59, Au anlok village, Tasen commune, Kamrieng district, Battambang Province, Cambodia."
                  : "ភូមិអូអន្លក់ ឃុំតាសែន ស្រុកកំរៀង ខេត្តបាត់ដំបង ព្រះរាជាណាចក្រកម្ពុជា"}
              </div>

              <div>
                {/* google map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376179.8368609776!2d103.5552563901511!3d12.003517282077828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3104b5c321b14653%3A0x37f19d875254fa2b!2sKhmer%20Jyoryu%20company!5e0!3m2!1skm!2skh!4v1707702223808!5m2!1skm!2skh"
                  className="w-full xl:w-[80%]"
                  height="310"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
          {/* contact info */}
          <div className="mt-10">
            <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl ">
              {language == "en" ? "Our Contact" : "ទំនាក់ទំនងតាមរយៈ"}
              <span className="text-primary font-bold">.</span>
            </h3>

            {contactInfo && (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="pt-6 pb-3 porse lg:prose-xl"
              >
                <div className=" hover:text-primary hover:underline cursor-pointer w-fit">
                  {/* phone */}
                  <div>
                    {language == "en" ? "Phone" : "លេខទូរស័ព្ទ"}:{" "}
                    <Link to={`tel:${contactInfo.phoneNumber}`}>
                      {convertToPhoneNumber(contactInfo.phoneNumber)}
                    </Link>
                  </div>
                </div>
                <div className=" hover:text-primary hover:underline cursor-pointer w-fit">
                  {/* email */}
                  <div>
                    {language == "en" ? "Email" : "អ៊ីម៉ែល"}:{" "}
                    <Link to={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </Link>
                  </div>
                </div>
                <div className=" hover:text-primary hover:underline cursor-pointer w-fit">
                  {/* telegram */}
                  <div>
                    {" "}
                    {language == "en" ? "Telegram" : "តេលេក្រាម"}:{" "}
                    <Link to={contactInfo.telegram}>@sorakhmer</Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* social media */}
            <div className="flex items-center gap-4 text-2xl mt-4">
              {contactInfo &&
                contactInfo.socialMedia.map((item, index) => (
                  <Link
                    to={item.url}
                    key={index}
                    className="hover:text-primary-light hover:underline"
                  >
                    <LinkIcon title={item.title} size={32} />
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="w-full">
          <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl ">
            {language == "en" ? "Send a message" : "ផ្ញើសារមកកាន់យើង"}
            <span className="text-primary font-bold">.</span>
          </h3>

          {/* form submit message */}
          <motion.form
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={(e) => sendToTelegram(e)}
          >
            <div className="flex flex-col gap-3 mt-5 md:mt-8">
              <div className="flex flex-col gap-0.5">
                {/* input fullname */}
                <label className="lg:prose-xl ">
                  {language == "en" ? "Fullname" : "ឈ្មោះ"}<RedStar />
                </label>
                <input
                  className="border border-border focus:border-primary outline-none p-2.5 rounded bg-transparent"
                  type="text"
                  name="fullname"
                  onChange={(e) => handleOnChange(e)}
                />
              </div>

              <div className="flex flex-col gap-0.5">
                {/* input social media  */}
                <label className="lg:prose-xl ">
                  {" "}
                  {language == "en" ? "Social media" : "បណ្តាញសង្គម"}(Telegram,
                  Line, Facebook,...)
                </label>
                <input
                  className="border border-border focus:border-primary outline-none p-2.5 rounded bg-transparent"
                  type="url"
                  name="socialMediaLink"
                  onChange={(e) => handleOnChange(e)}
                />
              </div>

              <div className="flex flex-col gap-0.5">
                {/* input email */}
                <label className="lg:prose-xl ">
                  {language == "en" ? "Email" : "អ៊ីម៉ែល"}
                </label>
                <input
                  className="border border-border focus:border-primary outline-none p-2.5 rounded bg-transparent"
                  type="email"
                  name="email"
                  onChange={(e) => handleOnChange(e)}
                />
              </div>

              <div className="flex flex-col gap-0.5">
                {/* input phone */}
                <label className="lg:prose-xl ">
                  {language == "en" ? "Phone" : "លេខទូរស័ព្ទ"}
                </label>
                <input
                  className="border border-border focus:border-primary outline-none p-2.5 rounded bg-transparent"
                  type="tel"
                  name="phone"
                  onChange={(e) => handleOnChange(e)}
                />
              </div>

              <div className="flex flex-col gap-0.5">
                {/* input country */}
                <label className="lg:prose-xl ">
                  {" "}
                  {language == "en" ? "Address" : "អាសយដ្ឋាន"}
                </label>
                <input
                  className="border border-border focus:border-primary outline-none p-2.5 rounded bg-transparent"
                  type="text"
                  name="address"
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="flex flex-col gap-0.5">
                {/* input message */}
                <label className="lg:prose-xl ">
                  {language == "en" ? "Message" : "ការពិពណ៌នា"}
                  <RedStar />
                </label>
                <textarea
                  className="border border-border focus:border-primary outline-none p-2.5 rounded bg-transparent"
                  name="description"
                  cols="30"
                  rows="5"
                  onChange={(e) => handleOnChange(e)}
                ></textarea>
              </div>

              {/* submit button */}
              <button
                type="submit"
                className="lg:prose-xl border-2 border-dashed border-primary px-6 py-2 font-semibold uppercase text-primary  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-[4px_4px_0px_rgb(245,156,0)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none"
              >
                {language == "en" ? "Send" : "ផ្ញើសារ"}
              </button>
            </div>
          </motion.form>

          {/* fill required information alert */}
          <WarningModal
            isOpen={isShowWarning}
            setIsOpen={setIsShowWarning}
            title={
              language == "en"
                ? "Fill Required Information!"
                : "បំពេញព័ត៌មានដែលចាំបាច់!"
            }
            description={
              language == "en"
                ? "Please fill the required fields with * mark. Thank you!"
                : "សូមបំពេញព័ត៌មានដែលចាំបាច់ដែលមាន * ជាសម្គាល់។ អរគុណ!"
            }
          />

          {/* submiting successfully alert */}

          <SuccessModal
            isOpen={isSubmitted}
            setIsOpen={() => {
              setIsSubmitted(false);
            }}
            title={language == "en" ? "Message Sent!" : "ផ្ញើសារដោយជោគជ័យ!"}
            description={
              language == "en"
                ? "Thank you for reaching out to us. We will get back to you as soon as possible."
                : "សូមអរគុណសំរាប់ការទំនាក់ទំនងមកកាន់យើង។ យើងនឹងឆ្លើយតបទៅអ្នកវិញនៅពេលក្រោយ។"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
