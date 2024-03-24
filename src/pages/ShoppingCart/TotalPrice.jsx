import PropType from "prop-types";
import LinkIcon from "../../components/ui/LinkIcon";
import { Link } from "react-router-dom";
import { FaFacebook, FaLine, FaTelegram } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import cambodiaFlag from "../../assets/images/cambodiaFlag.png";
import usFlag from "../../assets/images/us-flag.png";
import checkSocialMedia from "../../utils/checkSocialMedia";
import { FaShoppingCart } from "react-icons/fa";
import convertToPhoneNumber from "../../utils/convertToPhoneNumber";
import abaQr from "../../assets/images/aba-us.jpg";
import KHQRLogo from "../../assets/images/KHQR-logo.webp";
const TotalPrice = ({
  subtotal,
  otherPrice,
  total,
  isOpenForm,
  setIsOpenForm,
  formData,
  orderId,
  changeContent,
}) => {
  const { contactList, language } = useContext(DataContext);
  const contactInfo = contactList.map((item) => item)[0];
  const [languageInBox, setLanguageInBox] = useState(language);

  useEffect(() => {
    setLanguageInBox(language);
  }, [language]);

  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* show when there is at least one product in the cart */}
        {total !== "0" && (
          <div className={`w-full ${isOpenForm && " lg:mb-4 lg:ml-4"}`}>
            <table
              className={`border-collapse w-full bg-white  text-black ${
                !isOpenForm && "dark:bg-gray-950 dark:text-white "
              }`}
            >
              <thead>
                <th
                  colSpan={2}
                  className="p-3 text-left font-extrabold pr-3 break-keep uppercase bg-primary  border border-gray-300  table-cell"
                >
                  {language == "en" ? "Total Price" : "តម្លៃសរុប"}
                </th>
              </thead>
              <tbody className="text-left ">
                <tr>
                  {/* subtotal */}
                  <td className="p-3 border-l border-gray-300 table-cell">
                    {language == "en" ? "Subtotal:" : "សរុប"}
                  </td>
                  <td className="p-3 border-r border-gray-300 table-cell">
                    ${!changeContent && subtotal}
                    {changeContent && subtotal}
                    {!subtotal.includes(".") ? ".00" : ""}
                  </td>
                </tr>
                {/* other price = 0 */}
                <tr>
                  <td className="p-3 border-l  border-gray-300 table-cell">
                    {language == "en" ? "Other:" : "ផ្សេងៗ"}
                  </td>
                  <td className="p-3 border-r border-gray-300 table-cell">
                    $ {`${otherPrice}${!otherPrice.includes(".") ? ".00" : ""}`}
                  </td>
                </tr>
                {/* total price */}
                <tr>
                  <td className="p-3 border border-r-0 border-gray-300 table-cell font-semibold">
                    {language == "en" ? "Total:" : "តម្លៃសរុបរួម"}
                  </td>
                  <td className="p-3 border border-l-0 border-gray-300 table-cell  font-bold pr-3 break-keep">
                    $ {!changeContent && total}
                    {changeContent && total}
                    {!total.includes(".") ? ".00" : ""}
                  </td>
                </tr>
                {/* place order button */}
                {!isOpenForm && (
                  <tr>
                    <td
                      colSpan={2}
                      className="p-3 border text-center border-gray-300 table-cell"
                    >
                      <button
                        onClick={() => {
                          setIsOpenForm(true);
                        }}
                        className="bg-primary text-white font-bold pr-3 break-keep w-full h-full py-2 rounded hover:bg-primary-dark flex items-center justify-center gap-2"
                      >
                        {language == "en" ? "Place Order" : "បញ្ជាទិញ"}{" "}
                        <FaShoppingCart />
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {!isOpenForm ? (
          <div className="w-full h-[100%] inline-block bg-black/90 p-4 text-white relative pt-14  md:pt-4 ">
            {/* how to buy introduction */}
            {languageInBox === "en" ? (
              <div>
                <h4 className="text-white text-center text-2xl mb-4">
                  How to buy our products?
                </h4>
                <p className="mb-2">
                  1. Add products that you want to buy to cart
                </p>
                <p className="mb-2">
                  2. Click on place order button to order the products.
                </p>
                <p className="mb-2">
                  3. Fill required information such as your name, your contact
                  and location etc.
                </p>
                <p className="mb-2">
                  4. Click on order now button and wait for our call or message
                  to confirm your order and process the payment.
                </p>
                <p className="mb-2">
                  5. After payment, we will deliver the products to your
                  location.
                </p>

                <p className="mt-4">
                  or you can also contact us directly and send us the products
                  that you want to buy.
                </p>
              </div>
            ) : (
              <div>
                <h4 className="text-white text-center text-2xl mb-4">
                  របៀបទិញផលិតផលរបស់យើង
                </h4>
                <p className="mb-2">
                  ១. ជ្រើសរើសទំនិញដែលអ្នកចង់ទិញដាក់ទៅក្នុងកន្រ្តក(Cart)របស់អ្នក។
                </p>
                <p className="mb-2">
                  ២. ចុចលើប៊ូតុង Place Order ដើម្បីបញ្ជាទិញទំនិញ។
                </p>
                <p className="mb-2">
                  ៣. បំពេញព័ត៌មានដែលត្រូវការដូចជាឈ្មោះរបស់អ្នក, លេខទូរសព្ទ,
                  Telegram និងទីតាំងរបស់អ្នក។
                </p>
                <p className="mb-2">
                  ៤. ចុចលើប៊ូតុង Order Now និងរងចាំការទាក់ទងរបស់យើង តាមរយ:
                  លេខទូរសព្ទ, Line, Messager ឬ Telegram (បើអ្នកបានបំពេញ
                  Telegram)។
                </p>
                <p className="mb-2">
                  ៥. បន្ទាប់ពីយើងទាក់ទងគ្នារួច
                  យើងនឹងដឹកជញ្ជូនទំនិញទៅកាន់ទីតាំងរបស់អ្នក។
                </p>

                <p className="mt-4">
                  ឬអ្នកអាចទាក់ទងយើងដោយផ្ទាល់ និងផ្ញើទំនិញដែលអ្នកចង់ទិញមកកាន់យើង។
                </p>
              </div>
            )}

            {/* social media icon */}
            <div className="mt-5 flex gap-4 items-center">
              {" "}
              {languageInBox == "en" ? " Contact Us:" : "ទំនាក់ទំនងយើង៖"}
              <div className="flex items-center gap-3">
                {contactInfo ? (
                  contactInfo.socialMedia.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="hover:text-primary-light hover:underline"
                    >
                      <LinkIcon title={item.title} size={24} />
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
            {/* flag KH and US */}
            <div className="mx-8 shadow  text-xs h-10 mt-4 flex gap-2 p-1 absolute top-0 -right-4 items-center">
              <div
                onClick={() => setLanguageInBox("kh")}
                className={`w-full flex justify-center p-1 px-2 rounded ${
                  languageInBox == "kh" ? "bg-white" : " cursor-pointer"
                } `}
              >
                <img className="w-5 h-5" src={cambodiaFlag} alt="" />
              </div>
              <div
                onClick={() => setLanguageInBox("en")}
                className={`w-full flex justify-center p-1 px-2 rounded ${
                  languageInBox == "en" ? "bg-white" : " cursor-pointer"
                } `}
              >
                <img className="w-5 h-5" src={usFlag} alt="" />
              </div>
            </div>
          </div>
        ) : (
          // show when the form is open to take screenshot
          <div className="w-full p-6  pt-0 border border-gray-500 md:mb-4 md:mr-4 dark:text-black">
            <h4 className="text-primary font-bold text-2xl mb-4">
              Customer Information
            </h4>
            <div className="flex flex-col md:flex-row md:justify-between items-center  gap-8 lg:gap-2">
              <div className="w-full">
                <table className="w-full ">
                  <tbody className="break-all">
                    {/* order id */}
                    {orderId && (
                      <tr>
                        <td className="flex items-start">
                          <span className="font-bold pr-3 break-keep">
                            Order Id:
                          </span>
                        </td>
                        <td>
                          <span>{orderId}</span>
                        </td>
                      </tr>
                    )}
                    {/* today date */}
                    <tr>
                      <td className="flex items-start">
                        <span className="font-bold pr-3 break-keep">Date:</span>
                      </td>
                      <td>
                        <span>{new Date().toLocaleString()}</span>
                      </td>
                    </tr>
                    {/* fullname */}
                    {formData.fullName && (
                      <tr>
                        <td className="flex items-start">
                          <span className="font-bold pr-3 break-keep">
                            Fullname:
                          </span>
                        </td>
                        <td>
                          <span>{formData.fullName}</span>
                        </td>
                      </tr>
                    )}
                    {/* phone number */}
                    {formData.phoneNumber && (
                      <tr>
                        <td className="flex items-start">
                          <span className="font-bold pr-3 break-keep">
                            Phone:
                          </span>
                        </td>
                        <td>
                          <span>{formData.phoneNumber}</span>
                        </td>
                      </tr>
                    )}
                    {/* telegram */}
                    {formData.telegram && (
                      <tr>
                        <td className="flex items-start">
                          <span className="font-bold pr-3 break-keep">
                            {checkSocialMedia(formData.telegram)}:
                          </span>
                        </td>
                        <td>
                          <span>{formData.telegram}</span>
                        </td>
                      </tr>
                    )}
                    {/* address */}
                    {formData.address && (
                      <tr>
                        <td className="flex items-start">
                          <span className="font-bold pr-3 break-keep">
                            Address:
                          </span>
                        </td>
                        <td>
                          <span>{formData.address}</span>
                        </td>
                      </tr>
                    )}

                    {/* message */}
                    {formData.message && (
                      <tr>
                        <td className="flex items-start">
                          <span className="font-bold pr-3 break-keep">
                            Message:
                          </span>
                        </td>
                        <td>
                          <span>{formData.message}</span>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* aba qr code and sorakhmer logo */}
              <div className="w-full flex flex-col justify-end items-center ">
                <div className="bg-white relative z-2">
                  <img src={abaQr} alt="abaQr" />
                </div>
                <div className="mt-5">
                  <img className="w-[50px]" src={KHQRLogo} alt="khqrlogo" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/*company contact information on invoice*/}
      {isOpenForm && (
        <div className="mx-4 mt-2 md:mt-4 dark:text-black">
          <div className="flex justify-between items-center md:gap-4">
            <div className="hidden md:block w-full">
              © 2024 Sorakhmer. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center sm:justify-end w-full">
              <div className="flex items-center gap-2 ">
                &#127760; www.sorakhmer.com
              </div>
              <div className="flex items-center gap-2 ">
                &#128222;{" "}
                {contactInfo && convertToPhoneNumber(contactInfo.phoneNumber)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

TotalPrice.propTypes = {
  subtotal: PropType.string,
  otherPrice: PropType.string,
  total: PropType.string,
  isOpenForm: PropType.bool,
  setIsOpenForm: PropType.func,
  formData: PropType.object,
  orderId: PropType.string,
  changeContent: PropType.bool,
};

export default TotalPrice;
