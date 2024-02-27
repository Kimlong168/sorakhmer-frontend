import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { MdOutlineDeleteOutline } from "react-icons/md";
import dragon from "../../assets/images/dragon.png";
import "../../App.css";
import PopupImage from "../../components/ui/PopupImage";
const CartItemsSection = () => {
  const { cartItems, setCartItems } = useContext(DataContext);
  const [showImage, setShowImage] = useState({
    id: "",
    show: false,
  });
  const thStyle =
    "p-3 font-bold uppercase bg-primary  border border-gray-300  table-cell";

  const tdStyle = "p-3 border border-gray-300 text-gray-700 table-cell";

  const trStyle =
    "bg-white lg:hover:bg-gray-100 flex table-row text-center flex-row flex-row flex-wrap flex-no-wrap mb-10 mb-0";

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

  return (
    <section className="container p-8 md:p-0">
      <div className="pt-8">
        <div className="flex items-end">
          <img width={60} height={150} src={dragon} alt="dragon" />
          <span className="first-line:font-semibold text-3xl uppercase font-bold border-b-2 rounded-br-xl border-primary -ml-3 mb-[3.5px] pr-3">
            Shoping cart
          </span>
        </div>
        <div className="w-100 overflow-auto my-8" id="cart">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className={thStyle}>Image</th>
                <th className={thStyle}>Product name</th>
                <th className={thStyle}>Price</th>
                <th className={thStyle}>Quantity</th>
                <th className={thStyle}>Total</th>
                <th className={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <tr className={trStyle} key={item.id}>
                    {/* product image */}
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
                    {/* product name */}
                    <td className={tdStyle}>{item.name}</td>

                    {/* product price */}
                    <td className={tdStyle}>
                      ${" "}
                      {`${item.price}${!item.price.includes(".") ? ".00" : ""}`}
                    </td>

                    {/* product quantity */}
                    <td className={tdStyle}>
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
                                            parseFloat(cartItem.quantity) - 1,
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
                            <span className="m-auto text-2xl font-thin">−</span>
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
                                            parseFloat(cartItem.quantity) + 1,
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
                            <span className="m-auto text-2xl font-thin">+</span>
                          </button>
                        </div>
                      </div>
                    </td>

                    {/* total price for each product */}
                    <td className={tdStyle}>
                      ${" "}
                      {`${parseFloat(item.price) * parseFloat(item.quantity)}${
                        !item.price.includes(".") ? ".00" : ""
                      }`}
                    </td>

                    {/* action remove item form cart */}
                    <td className={tdStyle}>
                      <div
                        onClick={() => handleRemove(item.id)}
                        className="flex justify-center items-center gap-3 cursor-pointer hover:text-error"
                      >
                        <span className="hidden md:block">Remove</span>{" "}
                        <MdOutlineDeleteOutline />
                      </div>
                    </td>

                    {/* pop up image */}
                    {showImage.show && showImage.id === item.id && (
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
      </div>
    </section>
  );
};

export default CartItemsSection;
