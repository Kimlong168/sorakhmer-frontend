import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { MdOutlineDeleteOutline } from "react-icons/md";
import dragon from "../../assets/images/dragon.png";
import "../../App.css";
import PopupImage from "../../components/ui/PopupImage";
import { AnimatePresence } from "framer-motion";
import Notification from "../../components/ui/Notification";
import TotalPrice from "./TotalPrice";
import { Link } from "react-router-dom";
import axios from "axios"; // Make sure axios is installed via npm or yarn
import html2canvas from "html2canvas";
import { storage } from "../../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import CustomerContactForm from "./CustomerContactForm";
const CartItemsSection = () => {
  const { cartItems, setCartItems } = useContext(DataContext);
  const [showImage, setShowImage] = useState({
    id: "",
    show: false,
  });
  const [showRemoveNotification, setShowRemoveNotification] = useState({
    name: "",
    show: false,
  });
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [otherPrice, setOtherPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    telegram: "",
    line: "",
    address: "",
    message: "",
  });

  const thStyle =
    "p-3 font-bold uppercase bg-primary  border border-gray-300  table-cell";

  const tdStyle = "p-3 border border-gray-300 text-gray-700 table-cell";

  const trStyle =
    "bg-white lg:hover:bg-gray-100 flex table-row text-center flex-row flex-wrap flex-no-wrap mb-0";

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
      subtotal += parseFloat(item.price) * parseFloat(item.quantity);
    });
    total = subtotal + otherPrice;
    setSubtotal(subtotal);
    setOtherPrice(otherPrice);
    setTotal(total);
  }, [cartItems]);

  // handle send message to telegram
  //bot token
  var telegram_bot_id = "6882060062:AAFvZvxBHu1kqu_n5BgPpsx4V1dGoSqHXBw";
  //chat id
  var chat_id = 1344640111;

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

  const sendToTelegram = () => {
    html2canvas(document.querySelector("#message")).then(function (canvas) {
      // download the image
      var a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      console.log(a.href, "and", a);
      a.download = `link_tree_${name}.png`;
      a.click();

      // Convert canvas to base64 data URL
      var imageData = canvas.toDataURL("image/png");

      // Convert base64 data URL to Blob
      var imageBlob = dataURItoBlob(imageData);

      // Concatenate full name and timestamp to create the ID

      const imageRef = ref(storage, `cart/cartImage`);
      uploadBytes(imageRef, imageBlob).then(() => {
        // Get the download URL for the uploaded image
        getDownloadURL(imageRef)
          .then((downloadURL) => {
            console.log("profile image URL:", downloadURL);
            //send cart image to telegram

            try {
              const form = new FormData();
              form.append("chat_id", chat_id);
              form.append("photo", downloadURL);
              // Optionally, you can include a caption for the image
              // form.append('caption', 'Optional caption for the image');

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

              send();
            } catch (error) {
              console.error("Error sending image:", error);
            }

            // Send customer contact and information to telegram
            try {
              const send = async () => {
                const messageToSend = `===== New Order =====\n\nOrder id: 0001\nDate: ${new Date().toLocaleString()}
                \n------------------------------------------${
                  formData.fullName ? `\nName: ${formData.fullName}` : ""
                }
                ${
                  formData.phoneNumber
                    ? `\nPhone Number: ${formData.phoneNumber}`
                    : ""
                }
                ${formData.address ? `\nAddress: ${formData.address}` : ""}
                ${formData.telegram ? `\nTelegram: ${formData.telegram}` : ""}
                ${formData.email ? `\nEmail: ${formData.email}` : ""}
                ${formData.line ? `\nLine: ${formData.line}` : ""}
                ${formData.message ? `\nMessage: ${formData.message}` : ""}
                \n-----------------------------------------
                \nTotal: ${total} $
                \n-----------------------------------------`;

                await axios.post(
                  `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
                  {
                    chat_id: chat_id,
                    text: messageToSend,
                    // parse_mode: "MarkdownV2", // Specify HTML parsing mode
                  }
                );
                console.log("Message sent successfully!");
              };

              send();
            } catch (error) {
              console.error("Error sending message:", error);
            }
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
          });
        console.log("author image uploaded");
      });
    });
  };

  return (
    <section className="container p-8 md:p-0">
      <div className="pt-8">
        <div className="flex items-end">
          <img width={60} height={150} src={dragon} alt="dragon" />
          <span className="first-line:font-semibold text-3xl uppercase font-bold border-b-2 rounded-br-xl border-primary -ml-3 mb-[3.5px] pr-3">
            Shopping cart
          </span>
        </div>
        <div id="message">
          {isOpenForm && (
            <h2 className="text-center text-3xl font-bold">
              ===== New Order =====
            </h2>
          )}
          <div className="w-100 overflow-auto my-8" id="cart">
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  {!isOpenForm && <th className={thStyle}>Image</th>}
                  <th className={thStyle}>Name</th>
                  <th className={thStyle}>Price</th>
                  <th className={thStyle}>
                    <span className="md:hidden">Qty</span>
                    <span className="hidden md:block">Quantity</span>
                  </th>
                  <th className={thStyle}>Total</th>
                  {!isOpenForm && <th className={thStyle}>Remove</th>}
                </tr>
              </thead>
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
                              className="w-[100px] h-[120px] min-w-[100px] min-h-[120px] block mx-auto rounded-xs object-cover cursor-pointer hover:scale-110 transition-all"
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
                            {item.name}
                          </span>
                        </Link>
                      </td>
                      {/* product price */}
                      <td className={tdStyle}>
                        ${" "}
                        {`${item.price}${
                          !item.price.includes(".") ? ".00" : ""
                        }`}
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
                                  −
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
                          <span>{item.quantity}</span>
                        )}
                      </td>
                      {/* total price for each product */}
                      <td className={tdStyle}>
                        ${" "}
                        {`${
                          parseFloat(item.price) * parseFloat(item.quantity)
                        }${!item.price.includes(".") ? ".00" : ""}`}
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
                            <span className="hidden lg:block">Remove</span>{" "}
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
                    <td className={tdStyle} colSpan="6">
                      <span className="text-lg font-bold">
                        No items in the cart
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* total price */}
          {cartItems.length > 0 && (
            <TotalPrice
              subtotal={subtotal.toString()}
              otherPrice={otherPrice.toString()}
              total={total.toString()}
              isOpenForm={isOpenForm}
              setIsOpenForm={setIsOpenForm}
              formData={formData}
            />
          )}
        </div>
      </div>

      {/* remove notification */}
      {showRemoveNotification.show && (
        <div className="flex flex-col gap-1 w-72 fixed top-1 right-2 z-50 pointer-events-none">
          <AnimatePresence>
            <Notification
              text={`${showRemoveNotification.name} is removed from cart!`}
              removeNotif={() =>
                setShowRemoveNotification({ show: false, name: "" })
              }
              id={"id"}
              bg="bg-error"
            />
          </AnimatePresence>
        </div>
      )}

      {/* customer contact form */}
      {isOpenForm && (
        <CustomerContactForm
          setIsOpenForm={setIsOpenForm}
          formData={formData}
          setFormData={setFormData}
          sendToTelegram={sendToTelegram}
        />
      )}
    </section>
  );
};

export default CartItemsSection;
