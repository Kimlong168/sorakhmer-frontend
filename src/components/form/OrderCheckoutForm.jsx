import { useContext, useEffect, useState } from "react";
import PropType from "prop-types";
import { Html5QrcodeScanner } from "html5-qrcode";
import RedStar from "../ui/RedStar";
import SuccessModal from "../ui/SuccessModal";
import WarningModal from "../ui/WarningModal";
import LoadingWithPercentage from "../ui/LoadingWithPercentage";
import { FaWindowClose } from "react-icons/fa";
import "../../App.css";
import { DataContext } from "../../contexts/DataContext";
const CustomerContactForm = ({
  setIsOpenForm,
  formData,
  setFormData,
  sendToTelegram,
  setChangeContent = () => {},
  orderDetail = null,
}) => {
  const { language } = useContext(DataContext);
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
      return;
    }
  }, [inputLinkType]);

  return (
    <div>
      {isSubmitted.showForm && (
        <div className="fixed inset-0 bg-slate-900/20 backdrop-blur z-10 grid place-content-center text-black">
          <div
            className="overflow-auto my-10 p-6 pt-0 w-fit bg-white rounded relative"
            id="placeOrder"
          >
            <div className=" md:w-[600px] lg:w-[700px]">
              {/* title */}
              <div className="sticky top-0 left-5 right-5 pb-3 pt-6 mb-4 border-b-4 border-gray-400  bg-white  flex justify-between items-center gap-4">
                <h2 className="text-2xl font-bold">
                  {language == "en" ? "Place Order" : "បញ្ជាទិញ"}
                </h2>

                <div
                  onClick={() => setIsOpenForm(false)}
                  className="cursor-pointer hover:text-primary"
                >
                  <FaWindowClose size={18} />
                </div>
              </div>

              {!isSending ? (
                <>
                  {/* show order detail for buy now function */}
                  {orderDetail && (
                    <div className="-mt-1 mb-2.5 font-bold">
                      {orderDetail.productName} ( ${orderDetail.price}
                      {" x "}
                      {orderDetail.quantity}
                      {" = "}
                      <span className="text-lg text-primary">
                        {language == "en" ? `Total` : `សរុប`} $
                        {orderDetail.total}
                      </span>
                      )
                    </div>
                  )}
                  {/*  form for user to input their information */}
                  <form>
                    {/* fullname */}
                    <div className="mb-4">
                      <label
                        title="required"
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        {language == "en" ? "Fullname" : "ឈ្មោះ"}
                        <RedStar />
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
                    {/* phone number */}
                    <div className="mb-4">
                      <label
                        title="required"
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {language == "en" ? "Phone Number" : "លេខទូរស័ព្ទ"}
                        <RedStar />
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
                    {/* address */}
                    <div className="mb-4">
                      <label
                        title="required"
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        {language == "en" ? "Address" : "អាសយដ្ឋាន"}
                        <RedStar />
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

                    {/* contact link */}
                    <div className="mb-4">
                      <label
                        htmlFor="telegram"
                        className="text-sm font-medium text-gray-700 flex items-center gap-4 mb-1"
                      >
                        <div>
                          {language == "en"
                            ? " Telegram, Line, Facebook or other"
                            : "Telegram, Line, Facebook ឬផ្សេងទៀត"}
                        </div>

                        {/* button option qrcode and url */}
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
                          {/* input url */}
                          <input
                            type="url"
                            id="telegram"
                            name="telegram"
                            placeholder={
                              language == "en"
                                ? "copy your url and paste here..."
                                : "ចម្លង url របស់អ្នក ហើយបិទភ្ជាប់នៅទីនេះ..."
                            }
                            value={formData.telegram}
                            onChange={handleChange}
                            className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                          />

                          {/* to get rid of error unknown id="reader" */}
                          <div className="hidden" id="reader"></div>
                        </div>
                      ) : (
                        <div className="mt-2">
                          {/* qrcode scanner */}
                          <div className="rounded" id="reader"></div>
                          <p className="text-center text-gray-500">
                            {language == "en"
                              ? "Please scan the qr-code to get the link"
                              : "សូមស្កេន qr-code របស់អ្នកដើម្បីទទួលបានតំណ"}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* message */}
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {language == "en" ? "Message" : "ចំណាំ"}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                      />
                    </div>

                    {/* order now button */}
                    <div
                      onClick={() => {
                        if (
                          formData.fullName &&
                          formData.phoneNumber &&
                          formData.address
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
                      {language == "en" ? "Order Now" : "បញ្ជាទិញឥឡូវនេះ"}
                    </div>

                    {/* note */}
                    <div className="my-4">
                      <hr />

                      {language == "en" ? (
                        <p className="mt-2">
                          <span className="font-bold rounded mr-2">Note:</span>{" "}
                          We will reach out to you via your contact or Telegram
                          promptly. Once we confirm your order, we will proceed
                          to process the checkout. Thank you for your patience
                        </p>
                      ) : (
                        <p className="mt-2">
                          <span className="font-bold rounded mr-2">ចំណាំ</span>{" "}
                          យើងនឹងទាក់ទងទៅអ្នកតាមរយៈលេខទំនាក់ទំនងរបស់អ្នក ឬ
                          Telegram ភ្លាមៗ។ អរគុណចំពោះការរងចាំរបស់អ្នក
                        </p>
                      )}
                    </div>
                  </form>
                </>
              ) : (
                // loading with percentage
                <div className="  rounded-md flex flex-col gap-5 items-center justify-center">
                  <p>
                    {language == "en"
                      ? "Please wait a moment, we are sending your order to our system"
                      : "សូមរង់ចាំមួយភ្លែត យើងកំពុងផ្ញើការបញ្ជាទិញរបស់អ្នកទៅកាន់ប្រព័ន្ធរបស់យើង។"}
                  </p>
                  <div className="flex items-center gap-3 bg-green-500 w-fit  py-2 px-4 rounded-sm">
                    <span className="font-bold text-white">
                      {language == "en" ? "Sending" : "កំពុងផ្ញើ"}
                    </span>
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
        isOpen={isSubmitted.showAlert}
        setIsOpen={() => {
          setIsSubmitted({
            showForm: false,
            showAlert: false,
          });
          setIsOpenForm(false);
        }}
        title={
          language == "en"
            ? "You have ordered successfully!"
            : "អ្នកបានបញ្ជាទិញដោយជោគជ័យ!"
        }
        description={
          language == "en"
            ? "We will contact to you as soon as possible. Thank you for your patience."
            : "យើងនឹងទាក់ទងទៅអ្នកលឿនបំផុតតាមដែលអាចធ្វើបាន។ អរគុណចំពោះការរងចាំរបស់អ្នក។"
        }
      />
    </div>
  );
};

CustomerContactForm.propTypes = {
  setIsOpenForm: PropType.func.isRequired,
  formData: PropType.object.isRequired,
  setFormData: PropType.func.isRequired,
  sendToTelegram: PropType.func.isRequired,
  setChangeContent: PropType.func,
  orderDetail: PropType.object,
};

export default CustomerContactForm;
