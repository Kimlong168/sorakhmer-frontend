import { FaWindowClose } from "react-icons/fa";
import PropType from "prop-types";
import RedStar from "../../components/ui/RedStar";
import "../../App.css";
import { useState } from "react";
import SuccessModal from "../../components/ui/SuccessModal";
const CustomerContactForm = ({
  setIsOpenForm,
  formData,
  setFormData,
  sendToTelegram,
}) => {
  const [isSubmitted, setIsSubmitted] = useState({
    showForm: true,
    showAlert: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending the data to a server
    console.log(formData);
  };

  return (
    <div>
      {isSubmitted.showForm && (
        <div className="fixed inset-0 bg-black/30  z-10 grid place-content-center ">
          <div
            className="overflow-auto my-10 p-6 pt-0 w-fit bg-white rounded relative"
            id="placeOrder"
          >
            <div className=" md:w-[600px] lg:w-[700px]">
              <div className="sticky top-0 left-5 right-5 pb-3 pt-6 mb-4 border-b-4 border-gray-400  bg-white flex justify-between items-center gap-4">
                <h2 className="text-2xl font-bold">Place Order</h2>
                <div
                  onClick={() => setIsOpenForm(false)}
                  className="cursor-pointer hover:text-primary"
                >
                  <FaWindowClose size={18} />
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                
                <div className="mb-4">
                  <label
                    title="required"
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name <RedStar />
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md  w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    title="required"
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number <RedStar />
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="telegram"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telegram, Line, Facebook or other <RedStar />
                  </label>
                  <input
                    type="url"
                    id="telegram"
                    name="telegram"
                    placeholder="example: https://t.me/kimlong_chann"
                    value={formData.telegram}
                    onChange={handleChange}
                    className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label
                    title="required"
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address <RedStar />
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <p>
                    <span className="font-bold rounded mr-2">Note:</span> We
                    will reach out to you via Telegram promptly. Once we confirm
                    your order, we will proceed to process the checkout. Thank
                    you for your patience
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (
                      formData.fullName &&
                      formData.phoneNumber &&
                      formData.address &&
                      formData.telegram
                    ) {
                      sendToTelegram();
                      setIsSubmitted({
                        showForm: false,
                        showAlert: true,
                      });
                    } else {
                      alert("Please fill the required fields");
                    }
                  }}
                  type="submit"
                  className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
                >
                  Order Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* submiting successfully alert */}
      {isSubmitted.showAlert && (
        <SuccessModal
          isOpen={isSubmitted.showAlert}
          setIsOpen={() => {
            setIsSubmitted({
              showForm: false,
              showAlert: false,
            });
            setIsOpenForm(false);
          }}
        />
      )}
    </div>
  );
};

CustomerContactForm.propTypes = {
  setIsOpenForm: PropType.func.isRequired,
  formData: PropType.object.isRequired,
  setFormData: PropType.func.isRequired,
  sendToTelegram: PropType.func.isRequired,
};

export default CustomerContactForm;
