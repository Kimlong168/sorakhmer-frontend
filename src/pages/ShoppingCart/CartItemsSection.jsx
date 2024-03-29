import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { MdOutlineDeleteOutline } from "react-icons/md";
import dragon from "../../assets/images/dragon.png";
import logo from "../../assets/images/sorakhmer-logo.png";
import "../../App.css";
import PopupImage from "../../components/ui/PopupImage";
import { AnimatePresence } from "framer-motion";
import Notification from "../../components/ui/Notification";
import TotalPrice from "./TotalPrice";
import { Link } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import { db, storage } from "../../firebase-config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import OrderCheckoutForm from "../../components/form/OrderCheckoutForm";
import checkSocialMedia from "../../utils/checkSocialMedia";
import { addDoc, collection } from "firebase/firestore";

const CartItemsSection = () => {
  const { productList, cartItems, setCartItems, contactList, language } =
    useContext(DataContext);
  // show popup image
  const [showImage, setShowImage] = useState({
    id: "",
    show: false,
  });

  // show remove notification
  const [showRemoveNotification, setShowRemoveNotification] = useState({
    name: "",
    show: false,
  });

  // show customer contact form
  const [isOpenForm, setIsOpenForm] = useState(false);

  // total price
  const [subtotal, setSubtotal] = useState(0);
  const [otherPrice, setOtherPrice] = useState(0);
  const [total, setTotal] = useState(0);

  // form data for customer contact
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    telegram: "",
    address: "",
    message: "",
  });

  // order id
  const [orderId, setOrderId] = useState("");

  // contact info
  const contactInfo = contactList.map((item) => item)[0];
  const [changeContent, setChangeContent] = useState(false);

  // generate order id
  useEffect(() => {
    const fullNameWithoutSpaces = formData.fullName.replace(/\s/g, "");
    setOrderId(
      `${fullNameWithoutSpaces}_${Math.floor(Date.now() / 1000).toString()}`
    );
  }, [formData.fullName]);

  // handle remove product from <cart></cart>
  const handleRemove = (id) => {
    // find the product in the cart
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (cartItem) => cartItem.id !== id
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  // calculate total price
  useEffect(() => {
    let subtotal = 0;
    let otherPrice = 0;
    let total = 0;
    cartItems.forEach((item) => {
      // get the price of the product from the productList instead of local storage
      let itemPrice = productList
        .filter((product) => product.id === item.id)
        .map((filteredProduct) => filteredProduct.price);

      subtotal += parseFloat(itemPrice) * parseFloat(item.quantity);
    });

    total = subtotal + otherPrice;
    setSubtotal(subtotal);
    setOtherPrice(otherPrice);
    setTotal(total);
  }, [cartItems, productList]);

  // handle send message to telegram
  //bot token
  var telegram_bot_id = contactInfo
    ? contactInfo.telegramBotId
    : "6882060062:AAFvZvxBHu1kqu_n5BgPpsx4V1dGoSqHXBw";
  //chat id
  var chat_id = contactInfo ? contactInfo.chatId : "-1002126940474"; //channel id : we can send to both private and public channels

  // screenshot the cart image and send to telegram
  const sendToTelegram = () => {
    html2canvas(document.querySelector("#message")).then(function (canvas) {
      // Convert canvas to base64 data URL
      var imageData = canvas.toDataURL("image/png");

      // Convert base64 data URL to Blob
      var imageBlob = dataURItoBlob(imageData);

      const imageRef = ref(storage, `cart/cartImage_${orderId}`);
      uploadBytes(imageRef, imageBlob).then(() => {
        // Get the download URL for the uploaded image
        getDownloadURL(imageRef)
          .then((downloadURL) => {
            //get the download url
            // https://admin.sorakhmer.com/order/${orderId}
            try {
              const form = new FormData();

              // caption for the image to send to telegram
              const messageToSend = `===== New Order =====\n\nOrder id: ${orderId}\n\nDate: ${new Date().toLocaleString()}\n\nUpdate Status: https://sorakhmer-admin.netlify.app/orderDetail/${orderId}
                \n----------------------------------${
                  formData.fullName ? `\nName: ${formData.fullName}` : ""
                }
                ${
                  formData.phoneNumber ? `\nPhone: ${formData.phoneNumber}` : ""
                }
                ${formData.address ? `\nAddress: ${formData.address}` : ""}
                ${
                  formData.telegram
                    ? `\n${checkSocialMedia(formData.telegram)}: ${
                        formData.telegram
                      }`
                    : ""
                }
                ${formData.message ? `\nMessage: ${formData.message}` : ""}
                \n----------------------------------
                \n💰Total: ${total} $
                \n----------------------------------`;

              form.append("chat_id", chat_id);
              // url of image to send
              form.append("photo", downloadURL);
              // caption for the image
              form.append("caption", messageToSend);

              const send = async () => {
                const response = await axios.post(
                  `https://api.telegram.org/bot${telegram_bot_id}/sendPhoto`,
                  form,
                  {
                    headers: {
                      "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
                    },
                  }
                );
                console.log("Image sent successfully!", response);
              };

              // excute send function and record order to database and get the post link
              send();

              // record order to database
              recordOrder();
            } catch (error) {
              console.error("Error sending image:", error);
            }
            // Delete the cart image after 5s to save storage space
            setTimeout(() => {
              deleteImageFromStorage(imageRef);
            }, 5000); // 5s
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
          });
      });

      // download the cart image to user device
      var a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = `Invoice_${orderId}.png`;
      a.click();
    });

    // reset the fullName to avoid dubplicate order id bcoz we user fullName to generate order id
    setFormData({
      ...formData,
      fullName: "",
    });
  };

  // Function to convert base64 data URL to Blob
  const dataURItoBlob = (dataURI) => {
    var byteString = atob(dataURI.split(",")[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: "image/png" });
  };

  // delete cart image from firebase storage after 10
  const deleteImageFromStorage = (imageRef) => {
    // Delete the old image
    deleteObject(imageRef)
      .then(() => {
        console.log("cart image deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
      });
  };

  // record order to firestore database
  const recordOrder = () => {
    // data to be recorded
    const order = {
      orderId: orderId,
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      contactLink: formData.telegram,
      address: formData.address,
      message: formData.message,
      cartItems: cartItems,
      total: total,
      status: "pending",
      paymentMethod: "default",
      date: new Date().toLocaleString("en-GB"),
      timeStamp: new Date().getTime(),
    };

    const postCollectionRef = collection(db, "orders");
    addDoc(postCollectionRef, order);
  };

  // tailwind class style
  const thStyle =
    "p-3 font-bold uppercase bg-primary  border border-gray-300  table-cell";

  const tdStyle = `p-3 border border-gray-300 text-gray-700 ${
    !isOpenForm && " dark:bg-gray-950 dark:text-white/80"
  }`;

  const trStyle =
    "bg-white lg:hover:bg-gray-100 flex table-row text-center flex-row flex-wrap flex-no-wrap mb-0 ";

  return (
    <section className="container p-8 md:pt-0">
      <div className="pt-8">
        {/* dragon with title */}
        <div className="flex items-end">
          <img width={60} height={150} src={dragon} alt="dragon" />
          <span className="first-line:font-semibold text-[28px] sm:text-3xl uppercase font-bold border-b-2 rounded-br-xl border-primary -ml-3 mb-[3.5px] pr-3">
            {language == "en" ? "Shopping Cart" : "Shopping Cart"}
          </span>
        </div>

        {/*cart table */}
        <div id="message" className="relative overflow-hidden">
          {isOpenForm && (
            <h2 className="text-center text-3xl font-bold dark:text-black">
              {/* className="w-[70px] md:w-[100px] absolute top-2 md:top-0 left-0 */}
              <div>
                {/* water mark */}
                <img
                  className="w-full top-[50%] -translate-y-[50%] translate-x-[7%] rotate-[30deg] lg:translate-y-0 lg:h-full lg:inset-0 lg:rotate-45 absolute object-cover opacity-10"
                  src={logo}
                  alt="logo"
                />
              </div>
              {/* show when the form appears */}
              <span className="md:block hidden">===== New Order =====</span>
              <span className="md:hidden text-md">New Order</span>
            </h2>
          )}

          {/* cart table  */}
          <div className="w-100 overflow-auto my-8" id="cart">
            <table className="border-collapse w-full">
              {/* table head */}
              <thead>
                <tr>
                  {!isOpenForm && (
                    <th className={thStyle}>
                      {language == "en" ? "Image" : "រូបភាព"}
                    </th>
                  )}
                  <th className={thStyle}>
                    {language == "en" ? "Name" : "ទំនិញ"}
                  </th>
                  <th className={thStyle}>
                    {language == "en" ? "Price" : "តម្លៃ"}
                  </th>
                  <th className={thStyle}>
                    {language == "en" ? (
                      <>
                        <span className="md:hidden">Qty</span>
                        <span className="hidden md:block">Quantity</span>
                      </>
                    ) : (
                      "ចំនួន"
                    )}
                  </th>
                  <th className={thStyle}>
                    {language == "en" ? "Total" : "សរុប"}
                  </th>
                  {!isOpenForm && (
                    <th className={thStyle}>
                      {language == "en" ? "Remove" : "យកចេញ"}
                    </th>
                  )}
                </tr>
              </thead>

              {/* table body */}
              <tbody>
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <tr className={trStyle} key={item.id}>
                      {/* product image */}
                      {!isOpenForm && (
                        <td className={tdStyle}>
                          <div
                            onClick={() =>
                              setShowImage({
                                id: item.id,
                                show: true,
                              })
                            }
                          >
                            <img
                              className="w-[100px] h-[100px] md:h-[120px] min-w-[80px] min-h-[100px] block mx-auto rounded-xs object-cover cursor-pointer hover:scale-110 transition-all"
                              src={item.image}
                              alt="product-image"
                            />
                          </div>
                        </td>
                      )}
                      {/* product name */}
                      <td className={tdStyle}>
                        <Link to={`/product/${item.id}`}>
                          <span
                            title="see product detail"
                            className="hover:text-blue-500 hover:underline"
                          >
                            {/* use data from proudct list instead of local storage to avoid bad guy from inspect to change name */}
                            {!changeContent && (
                              <>
                                {productList &&
                                  productList
                                    .filter((product) => product.id === item.id)
                                    .map((filteredProduct) => (
                                      <span key={filteredProduct.id}>
                                        {filteredProduct.name}
                                      </span>
                                    ))}
                              </>
                            )}
                            {changeContent && (
                              <>
                                {productList &&
                                  productList
                                    .filter((product) => product.id === item.id)
                                    .map((filteredProduct) => (
                                      <span key={filteredProduct.id}>
                                        {filteredProduct.name}
                                      </span>
                                    ))}
                              </>
                            )}
                          </span>
                        </Link>
                      </td>
                      {/* product price */}
                      <td className={tdStyle}>
                        {/* use data from proudct list instead of local storage to avoid bad guy from inspect to change price and also get update if the data is updated, abd state changeContent is used to prevent from changing content when inspect*/}
                        ${" "}
                        {!changeContent && (
                          <>
                            {productList &&
                              productList
                                .filter((product) => product.id === item.id)
                                .map((filteredProduct) => (
                                  <span key={filteredProduct.id}>
                                    {filteredProduct.price}
                                  </span>
                                ))}
                          </>
                        )}
                        {changeContent && (
                          <>
                            {productList &&
                              productList
                                .filter((product) => product.id === item.id)
                                .map((filteredProduct) => (
                                  <span key={filteredProduct.id}>
                                    {filteredProduct.price}
                                  </span>
                                ))}
                          </>
                        )}
                        {!productList
                          .filter((product) => product.id === item.id)
                          .map((filteredProduct) => filteredProduct.price)
                          .toString()
                          .includes(".")
                          ? ".00"
                          : ""}
                      </td>
                      {/* product quantity */}
                      <td className={tdStyle}>
                        {!isOpenForm ? (
                          <div className="custom-number-input h-10 w-32 mx-auto">
                            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                              {/* minus button */}
                              <button
                                onClick={() => {
                                  if (item.quantity < 2) return;

                                  // find the product in the cart
                                  setCartItems((prevCartItems) => {
                                    const updatedCartItems = prevCartItems.map(
                                      (cartItem) =>
                                        cartItem.id === item.id
                                          ? {
                                              ...cartItem,
                                              quantity:
                                                parseFloat(cartItem.quantity) -
                                                1,
                                            }
                                          : cartItem
                                    );
                                    localStorage.setItem(
                                      "cartItems",
                                      JSON.stringify(updatedCartItems)
                                    );
                                    return updatedCartItems;
                                  });
                                }}
                                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                              >
                                <span className="m-auto text-2xl font-thin">
                                  -
                                </span>
                              </button>

                              {/* input quantity */}
                              <input
                                type="number"
                                className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                name="custom-input-number"
                                min={1}
                                value={parseFloat(item.quantity)}
                                onChange={(e) => {
                                  // find the product in the cart
                                  if (e.target.value < 1) return;
                                  setCartItems((prevCartItems) => {
                                    const updatedCartItems = prevCartItems.map(
                                      (cartItem) =>
                                        cartItem.id === item.id
                                          ? {
                                              ...cartItem,
                                              quantity: e.target.value,
                                            }
                                          : cartItem
                                    );
                                    localStorage.setItem(
                                      "cartItems",
                                      JSON.stringify(updatedCartItems)
                                    );
                                    return updatedCartItems;
                                  });
                                }}
                              ></input>

                              {/* plus button */}
                              <button
                                onClick={() => {
                                  // find the product in the cart
                                  setCartItems((prevCartItems) => {
                                    const updatedCartItems = prevCartItems.map(
                                      (cartItem) =>
                                        cartItem.id === item.id
                                          ? {
                                              ...cartItem,
                                              quantity:
                                                parseFloat(cartItem.quantity) +
                                                1,
                                            }
                                          : cartItem
                                    );
                                    localStorage.setItem(
                                      "cartItems",
                                      JSON.stringify(updatedCartItems)
                                    );
                                    return updatedCartItems;
                                  });
                                }}
                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                              >
                                <span className="m-auto text-2xl font-thin">
                                  +
                                </span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <span>
                            {!changeContent && item.quantity}
                            {changeContent && item.quantity}
                          </span>
                        )}
                      </td>
                      {/* total price for each product */}
                      <td className={tdStyle}>
                        {/* use data from proudct list instead of local storage to avoid bad guy from inspect to change price and also get update if the data is updated, abd state changeContent is used to prevent from changing content when inspect*/}
                        ${" "}
                        {!changeContent && (
                          <>
                            {productList.filter(
                              (product) => product.id === item.id
                            ).length > 0 &&
                              parseFloat(
                                productList.filter(
                                  (product) => product.id === item.id
                                )[0].price
                              ) * parseFloat(item.quantity)}
                          </>
                        )}
                        {changeContent && (
                          <>
                            {productList.filter(
                              (product) => product.id === item.id
                            ).length > 0 &&
                              parseFloat(
                                productList.filter(
                                  (product) => product.id === item.id
                                )[0].price
                              ) * parseFloat(item.quantity)}
                          </>
                        )}
                        {/* if it a float or not */}
                        {!productList
                          .filter((product) => product.id === item.id)
                          .map((filteredProduct) => filteredProduct.price)
                          .toString()
                          .includes(".")
                          ? ".00"
                          : ""}
                      </td>
                      {/* action remove item form cart */}
                      {!isOpenForm && (
                        <td className={tdStyle}>
                          <div
                            onClick={() => {
                              setShowRemoveNotification({
                                show: true,
                                name: item.name,
                              });
                              handleRemove(item.id);
                            }}
                            className="flex justify-center items-center gap-3 cursor-pointer hover:text-error"
                          >
                            <span className="hidden lg:block">
                              {language == "en" ? "Remove" : "យកចេញ"}
                            </span>{" "}
                            <MdOutlineDeleteOutline size={24} />
                          </div>
                        </td>
                      )}
                      {/* pop up image */}
                      {showImage.show && showImage.id == item.id && (
                        <div className="absolute top-0 right-0">
                          <PopupImage
                            image={item.image}
                            setShowImage={(status) =>
                              setShowImage({
                                id: item.id,
                                show: status,
                              })
                            }
                          />
                        </div>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr className={trStyle}>
                    {/* if no items in the card */}
                    <td className={tdStyle} colSpan="6">
                      <div className="text-lg font-bold">
                        <div className="py-5">
                          {language == "en"
                            ? "No items in the cart."
                            : "មិនទាន់មានទំនិញនៅក្នុង Cart"}
                        </div>

                        <Link
                          to="/products"
                          className="text-blue-400 hover:underline hover:text-blue-600"
                        >
                          {language == "en" ? "Shop Now" : "ទិញឥឡូវនេះ"}
                        </Link>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* total price section*/}
          <div>
            <TotalPrice
              subtotal={subtotal.toString()}
              otherPrice={otherPrice.toString()}
              total={total.toString()}
              isOpenForm={isOpenForm}
              setIsOpenForm={setIsOpenForm}
              formData={formData}
              orderId={orderId}
              changeContent={changeContent}
              itemsLength={cartItems.length}
            />
          </div>
        </div>
      </div>

      {/* order checkout form */}
      {isOpenForm && (
        <OrderCheckoutForm
          setIsOpenForm={setIsOpenForm}
          formData={formData}
          setFormData={setFormData}
          sendToTelegram={sendToTelegram}
          setChangeContent={() => {
            setChangeContent((prev) => !prev);
          }}
        />
      )}

      {/* remove notification */}
      {showRemoveNotification.show && (
        <div className="flex flex-col gap-1 w-72 fixed top-1 right-2 z-50 pointer-events-none">
          <AnimatePresence>
            <Notification
              text={`${showRemoveNotification.name} ${
                language == "en" ? "is removed from" : "បានលុបចេញពី"
              } cart!`}
              removeNotif={() =>
                setShowRemoveNotification({ show: false, name: "" })
              }
              id={"id"}
              bg="bg-error"
            />
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

export default CartItemsSection;
