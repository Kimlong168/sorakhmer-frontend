import PropType from "prop-types";
import LinkIcon from "../../components/ui/LinkIcon";
import { Link } from "react-router-dom";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const TotalPrice = ({
  subtotal,
  otherPrice,
  total,
  isOpenForm,
  setIsOpenForm,
  formData,
}) => {
  const { contact } = useContext(DataContext);
  const contactInfo = contact.map((item) => item)[0];
  return (
    <div className="flex flex-col md:flex-row gap-5 mb-8 ">
      <div className="w-full md:mb-4 md:ml-4">
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
        <div className="w-full h-[100%] inline-block bg-black p-4 text-white">
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
            or you can also contact us directly and send us the products that
            you want to buy.
          </p>

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
        </div>
      ) : (
        <div className="w-full p-6 pt-0 border border-gray-500 rounded  md:mb-4 md:mr-4">
          <h4 className="text-primary font-bold text-2xl mb-4">
            Customer Information
          </h4>
          <table>
            <tbody>
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

              {formData.line && (
                <tr>
                  <td>
                    <span className="font-bold pr-3">Line:</span>
                  </td>
                  <td>
                    <span>{formData.line}</span>
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
};

export default TotalPrice;
