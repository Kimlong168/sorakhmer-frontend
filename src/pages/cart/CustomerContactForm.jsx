import { useEffect, useState } from "react";
import PropType from "prop-types";
import { Html5QrcodeScanner } from "html5-qrcode";
import RedStar from "../../components/ui/RedStar";
import SuccessModal from "../../components/ui/SuccessModal";
import WarningModal from "../../components/ui/WarningModal";
import LoadingWithPercentage from "../../components/ui/LoadingWithPercentage";
import { FaWindowClose } from "react-icons/fa";
import "../../App.css";
const CustomerContactForm = ({
  setIsOpenForm,
  formData,
  setFormData,
  sendToTelegram,
  setChangeContent,
}) => {
  const [isSubmitted, setIsSubmitted] = useState({
    showForm: true,
    showAlert: false,
  });
  const [inputLinkType, setInputLinkType] = useState("url");
  // const [scannerResult, setScannerResult] = useState(null);
  const [isShowWarning, setIsShowWarning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSending, setIsSending] = useState(false);

  // handle change of input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle loading with percentage
  useEffect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress < 90 ? prevProgress + 8 : 100
        );
      }, 300);

      return () => clearInterval(interval);
    }, 1000);
  }, [isSending]);

  // qr code scanner

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 10,
    });

    // render the scanner when the inputLinkType is qr-code
    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      // setScannerResult(result);
      setFormData({ ...formData, telegram: result });
      setInputLinkType("url");
    }

    function error() {
      console.warn("error");
    }
  }, [inputLinkType]);

  return (
    <div>
      {isSubmitted.showForm && (
        <div className="fixed inset-0 bg-slate-900/20 backdrop-blur z-10 grid place-content-center ">
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
              {!isSending ? (
                // form for user to input their information
                <form>
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
                      htmlFor="telegram"
                      className="text-sm font-medium text-gray-700 flex items-center gap-4 mb-1"
                    >
                      <div>
                        Telegram, Line, Facebook or other <RedStar />
                      </div>
                      <div className="flex gap-2 items-center">
                        <span
                          className={`cursor-pointer px-4 py-1  text-xs rounded  ${
                            inputLinkType == "url"
                              ? "text-white bg-green-500"
                              : "text-gray-900 border"
                          } `}
                          onClick={() => setInputLinkType("url")}
                        >
                          Url
                        </span>
                        <span
                          className={`cursor-pointer px-4 py-1  text-xs rounded  ${
                            inputLinkType == "qrcode"
                              ? "text-white bg-green-500"
                              : "text-gray-900 border"
                          } `}
                          onClick={() => setInputLinkType("qrcode")}
                        >
                          Qrcode
                        </span>
                      </div>
                    </label>
                    {inputLinkType === "url" ? (
                      <div>
                        <input
                          type="url"
                          id="telegram"
                          name="telegram"
                          placeholder="example: https://t.me/kimlong_chann"
                          value={formData.telegram}
                          onChange={handleChange}
                          className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                        />

                        {/* to get rid of error unknown id="reader" */}
                        <div className="hidden" id="reader"></div>
                      </div>
                    ) : (
                      <div className="mt-2">
                        <div className="rounded" id="reader"></div>
                        <p className="text-center text-gray-500">
                          Please scan the qr-code to get the link
                        </p>
                      </div>
                    )}
                  </div>

                  {/* <div className="mb-4">
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
                  </div> */}
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
                      rows="3"
                      className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                    />
                  </div>

                  <div
                    onClick={() => {
                      if (
                        formData.fullName &&
                        formData.phoneNumber &&
                        formData.address &&
                        formData.telegram
                      ) {
                        setIsSending(true);

                        // this function is used to prevent user from changing the content of the page epsecially the price, and quantity to make us screenshot the wrong data
                        setChangeContent();
                        // delay 1.5s to make sure the content is changed and the image is taken
                        setTimeout(() => {
                          sendToTelegram();
                        }, 2000);
                        // delay 3s to make sure the image is uploaded and also deleted after sending to telegram successfully
                        setTimeout(() => {
                          setIsSubmitted({
                            showForm: false,
                            showAlert: true,
                          });
                        }, 3000);
                        // reset the percentage value
                        setProgress(0);
                      } else {
                        setIsShowWarning(true);
                      }
                    }}
                    className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark w-fit cursor-pointer font-bold"
                  >
                    Order Now
                  </div>

                  {/* note */}
                  <div className="my-4">
                    <hr />
                    <p className="mt-2">
                      <span className="font-bold rounded mr-2">Note:</span> We
                      will reach out to you via your contact or Telegram
                      promptly. Once we confirm your order, we will proceed to
                      process the checkout. Thank you for your patience
                    </p>
                  </div>
                </form>
              ) : (
                // loading with percentage
                <div className="  rounded-md flex flex-col gap-5 items-center justify-center">
                  <p>
                    Please wait a moment, we are sending your order to our
                    system
                  </p>
                  <div className="flex items-center gap-3 bg-green-500 w-fit  py-2 px-4 rounded-sm">
                    <span className="font-bold text-white">Sending</span>
                    <LoadingWithPercentage percentage={progress} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* fill required information alert */}
      <WarningModal
        isOpen={isShowWarning}
        setIsOpen={setIsShowWarning}
        title="Fill Required Information!"
        description="Please fill the required fields with * mark. Thank you!"
      />

      {/* submiting successfully alert */}
      <SuccessModal
        isOpen={isSubmitted.showAlert}
        setIsOpen={() => {
          setIsSubmitted({
            showForm: false,
            showAlert: false,
          });
          setIsOpenForm(false);
        }}
        title="You have ordered successfully!"
        description="We will contact to you as soon as possible. Thank you for your patience."
      />
    </div>
  );
};

CustomerContactForm.propTypes = {
  setIsOpenForm: PropType.func.isRequired,
  formData: PropType.object.isRequired,
  setFormData: PropType.func.isRequired,
  sendToTelegram: PropType.func.isRequired,
  setChangeContent: PropType.func.isRequired,
};

export default CustomerContactForm;
