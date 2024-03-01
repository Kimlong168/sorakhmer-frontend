import PropType from "prop-types";
import LinkIcon from "../../components/ui/LinkIcon";
import { Link } from "react-router-dom";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import cambodiaFlag from "../../assets/images/cambodiaFlag.png";
import usFlag from "../../assets/images/us-flag.png";
const TotalPrice = ({
  subtotal,
  otherPrice,
  total,
  isOpenForm,
  setIsOpenForm,
  formData,
  orderId,
}) => {
  const { contactList } = useContext(DataContext);
  const contactInfo = contactList.map((item) => item)[0];
  const [language, setLanguage] = useState("us");
  return (
    <div className="flex flex-col lg:flex-row gap-5 mb-8">
      <div className={`w-full ${isOpenForm && " lg:mb-4 lg:ml-4"}`}>
        <table className="border-collapse w-full">
          <thead>
            <th
              colSpan={2}
              className="p-3 text-left font-bold pr-3 uppercase bg-primary border border-gray-300  table-cell"
            >
              Total Price
            </th>
          </thead>
          <tbody className="text-left">
            <tr className="bg-white lg:hover:bg-gray-100">
              <td className="p-3 border-l border-gray-300 text-gray-700 table-cell">
                Subtotal:
              </td>
              <td className="p-3 border-r border-gray-300 text-gray-700 table-cell">
                $ {`${subtotal}${!subtotal.includes(".") ? ".00" : ""}`}
              </td>
            </tr>
            <tr className="bg-white lg:hover:bg-gray-100">
              <td className="p-3 border-l  border-gray-300 text-gray-700 table-cell">
                Other:
              </td>
              <td className="p-3 border-r border-gray-300 text-gray-700 table-cell">
                $ {`${otherPrice}${!otherPrice.includes(".") ? ".00" : ""}`}
              </td>
            </tr>
            <tr className="bg-white lg:hover:bg-gray-100  ">
              <td className="p-3 border border-r-0 border-gray-300 text-gray-700 table-cell">
                Total:
              </td>
              <td className="p-3 border border-l-0 border-gray-300 text-gray-700 table-cell  font-bold pr-3">
                $ {`${total}${!total.includes(".") ? ".00" : ""}`}
              </td>
            </tr>
            {!isOpenForm && (
              <tr className="bg-white lg:hover:bg-gray-100  ">
                <td
                  colSpan={2}
                  className="p-3 border text-center border-gray-300 text-gray-700 table-cell"
                >
                  <button
                    onClick={() => {
                      setIsOpenForm(true);
                    }}
                    className="bg-primary text-white font-bold pr-3 w-full h-full block py-2 rounded hover:bg-primary-dark"
                  >
                    Place Order
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {!isOpenForm ? (
        <div className="w-full h-[100%] inline-block bg-black/90 p-4 text-white relative pt-12  md:pt-4 ">
          {language === "us" ? (
            <div>
              <h4 className="text-white text-center text-2xl mb-4">
                How to buy our products?
              </h4>
              <p className="mb-2">
                1. Click on place order button to order the products.
              </p>
              <p className="mb-2">
                2. Fill required information such as your name, your contact and
                location etc.
              </p>
              <p className="mb-2">
                3. Click on order now button and wait for our call or message to
                confirm your order and process the payment.
              </p>
              <p className="mb-2">
                4. After payment, we will deliver the products to your location.
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
                ១. ចុចលើប៊ូតុង Place Order ដើម្បីបញ្ជាទិញទំនិញ។
              </p>
              <p className="mb-2">
                ២. បំពេញព័ត៌មានដែលត្រូវការដូចជាឈ្មោះរបស់អ្នក, លេខទូរសព្ទ,
                Telegram និងទីតាំងរបស់អ្នក។
              </p>
              <p className="mb-2">
                ៣. ចុចលើប៊ូតុង Order Now និងរងចាំការទាក់ទងរបស់យើង តាមរយ:
                លេខទូរសព្ទ, Line, Messager ឬ Telegram (បើអ្នកបានបំពេញ Telegram)។
              </p>
              <p className="mb-2">
                ៤. បន្ទាប់ពីយើងទាក់ទងគ្នារួច
                យើងនឹងដឹកជញ្ជូនទំនិញទៅកាន់ទីតាំងរបស់អ្នក។
              </p>

              <p className="mt-4">
                ឬអ្នកអាចទាក់ទងយើងដោយផ្ទាល់ និងផ្ញើទំនិញដែលអ្នកចង់ទិញមកកាន់យើង។
              </p>
            </div>
          )}

          <div className="mt-5 flex gap-4 items-center">
            Contact us for more detail:{" "}
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
                    to="/"
                    className="hover:text-primary-light hover:underline"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    to="/"
                    className="hover:text-primary-light hover:underline"
                  >
                    <FaYoutube />
                  </Link>
                  <Link
                    to="/"
                    className="hover:text-primary-light hover:underline"
                  >
                    <FaTelegram />
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="mx-8 shadow  text-xs h-10 mt-4 flex gap-2 p-1 absolute top-0 -right-4 items-center">
            <div
              onClick={() => setLanguage("kh")}
              className={`w-full flex justify-center p-1 px-2 rounded ${
                language == "kh" ? "bg-white" : " cursor-pointer"
              } `}
            >
              <img className="w-5 h-5" src={cambodiaFlag} alt="" />
            </div>
            <div
              onClick={() => setLanguage("us")}
              className={`w-full flex justify-center p-1 px-2 rounded ${
                language == "us" ? "bg-white" : " cursor-pointer"
              } `}
            >
              <img className="w-5 h-5" src={usFlag} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full p-6 pt-0 border border-gray-500 md:rounded  md:mb-4 md:mr-4">
          <h4 className="text-primary font-bold text-2xl mb-4">
            Customer Information
          </h4>
          <table>
            <tbody>
              {orderId && (
                <tr>
                  <td>
                    <span className="font-bold pr-3">Order Id:</span>
                  </td>
                  <td>
                    <span>{orderId}</span>
                  </td>
                </tr>
              )}
              {formData.fullName && (
                <tr>
                  <td>
                    <span className="font-bold pr-3">Full Name:</span>
                  </td>
                  <td>
                    <span>{formData.fullName}</span>
                  </td>
                </tr>
              )}

              {formData.phoneNumber && (
                <tr>
                  <td>
                    <span className="font-bold pr-3">Phone Number:</span>
                  </td>
                  <td>
                    <span>{formData.phoneNumber}</span>
                  </td>
                </tr>
              )}

              {formData.telegram && (
                <tr>
                  <td>
                    <span className="font-bold pr-3">Telegram:</span>
                  </td>
                  <td>
                    <span>{formData.telegram}</span>
                  </td>
                </tr>
              )}

              {formData.address && (
                <tr>
                  <td>
                    <span className="font-bold pr-3">Address:</span>
                  </td>
                  <td>
                    <span>{formData.address}</span>
                  </td>
                </tr>
              )}

              {formData.email && (
                <tr>
                  <td>
                    <span className="font-bold pr-3">Email:</span>
                  </td>
                  <td>
                    <span>{formData.email}</span>
                  </td>
                </tr>
              )}

              {formData.message && (
                <tr>
                  <td>
                    <span className="font-bold pr-3">Message:</span>
                  </td>
                  <td>
                    <span>{formData.message}</span>
                  </td>
                </tr>
              )}

              {/* today date */}
              <tr>
                <td>
                  <span className="font-bold pr-3">Date:</span>
                </td>
                <td>
                  <span>{new Date().toLocaleString()}</span>
                </td>
              </tr>
            </tbody>
          </table>
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
};

export default TotalPrice;
