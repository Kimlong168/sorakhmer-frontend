import PropTypes from "prop-types";
import { MdOutlineOpenWith } from "react-icons/md";
import PopupImage from "../../components/ui/PopupImage";
import { useContext, useState } from "react";
import ContentDisplay from "../../components/ui/ContentDisplay";
import SharingBtn from "../../components/ui/SharingBtn";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaLink, FaMoneyBill, FaShoppingCart } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import Notification from "../../components/ui/Notification";
import { DataContext } from "../../contexts/DataContext";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import MetadataHeader from "../../components/ui/MetadataHeader";

const ProductDetailCard = ({
  id,
  name,
  price,
  image,
  categoryId,
  detail,
  description,
  productCategoryList,
  quantity,
  setQuantity,
  setIsOpenForm,
}) => {
  const { addToCart, setShowViewCartBtn, language } = useContext(DataContext);

  const [showImage, setShowImage] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isAddedtoCart, setIsAddedtoCart] = useState(false);
  const [showNumberToAdd, setShowNumberToAdd] = useState(false);
  //   get current url
  const currentURL = window.location.href;

  return (
    <>
      {/* metadata header */}
      <MetadataHeader
        title={`Product | ${name}`}
        description={description}
        image={image}
      />

      {/* product card */}
      <div className=" w-full mt-5">
        <div className="flex items-center justify-center w-full">
          <div className="border p-4 md:p-8 flex flex-col w-full md:flex-row gap-5 md:gap-24 rounded    text-gray-700 dark:text-white shadow-md">
            <div className="w-full md:w-2/5 ">
              <div
                onClick={() => setShowImage(true)}
                className="relative m-0 shadow-xl overflow-hidden rounded   text-gray-700"
              >
                {/* product image */}
                <img
                  src={image}
                  className="h-full w-full rounded object-cover object-center cursor-zoom-in"
                  alt="product-image"
                />
                {/* open button */}
                <div className="absolute top-0  rounded text-white cursor-pointer bg-primary grid place-content-center w-[30px] h-[30px]">
                  <MdOutlineOpenWith />
                </div>
              </div>
              <div>
                <div className="font-semibold text-center p-4">
                  {language == "en" ? "Share this product" : "ចែករំលែកទៅកាន់"}
                </div>
                <SharingBtn url={currentURL} title={name} />
              </div>
            </div>

            <div className="md:px-6 mt-5 w-full">
              {/* product information */}
              <div>
                {/* product name */}
                <h6 className="block text-4xl">
                  <span className=" font-bold">{name}</span>
                </h6>

                {/* category */}
                <h4 className="mb-5 text-blue-gray-900 text-sm flex items-center gap-2">
                  <span>{language == "en" ? "Category:" : "ប្រភេទ:"} </span>
                  <div className="text-primary">
                    {productCategoryList &&
                      productCategoryList.map((data) => {
                        if (data.id == categoryId) {
                          return data.categoryName;
                        }
                      })}
                  </div>
                </h4>

                {/* description and detail */}
                <div className="pb-8 mt-10">
                  <div className="flex gap-10 items-center w-full font-bold text-md">
                    <div
                      onClick={() => setShowDetail(false)}
                      className={` ${
                        !showDetail && "text-primary border-b-2 border-primary "
                      } cursor-pointer `}
                    >
                      {language == "en" ? "Description:" : "ការពិពណ៌នា:"}
                    </div>
                    <div
                      onClick={() => setShowDetail(true)}
                      className={` ${
                        showDetail && "text-primary border-b-2 border-primary "
                      } cursor-pointer `}
                    >
                      {language == "en" ? "Detail:" : "សេចក្តីលម្អិត:"}
                    </div>
                  </div>

                  <div className="mt-5 overflow-auto">
                    {showDetail ? (
                      <div>
                        {detail.trim() === "<p><br></p>" ||
                        detail.trim() === "" ? (
                          "No Detail"
                        ) : (
                          <ContentDisplay htmlString={detail} />
                        )}
                      </div>
                    ) : (
                      description
                    )}
                  </div>
                </div>
                <hr />

                <div className="flex items-center gap-12  mt-8">
                  {/* price */}
                  <div className="flex items-center gap-8">
                    {language == "en" ? "Price:" : "តម្លៃ:"}
                    <h5 className="font-bold text-4xl">
                      $ {`${price}${!price.includes(".") ? ".00" : ""}`}
                    </h5>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                {/* quantity button */}

                <div className="flex flex-row max-w-[130px] relative bg-transparent overflow-hidden">
                  {/* minus button */}
                  <button
                    onClick={() => {
                      if (quantity < 2) return;

                      setQuantity(parseFloat(quantity) - 1);
                    }}
                    className="p-2.5 px-4 w-[40px] rounded-s bg-gray-400 hover:bg-gray-500 lg:active:animate-ping text-white font-bold "
                  >
                    <span className="m-auto  font-bold">-</span>
                  </button>

                  {/* input quantity */}
                  <input
                    type="number"
                    className="focus:outline-none text-center w-[50px] pl-2.5 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                    name="custom-input-number"
                    min={1}
                    value={parseFloat(quantity)}
                    onChange={(e) => {
                      if (e.target.value < 1) return;

                      setQuantity(e.target.value);
                    }}
                  ></input>

                  {/* plus button */}
                  <button
                    onClick={() => {
                      // find the product in the cart
                      setQuantity(parseFloat(quantity) + 1);
                    }}
                    className="p-2.5 px-4 w-[40px] rounded-e bg-gray-400 hover:bg-gray-500 lg:active:animate-ping text-white font-bold "
                  >
                    <span className="m-auto font-bold">+</span>
                  </button>
                </div>

                {/* buy now */}
                <button
                  onClick={() => setIsOpenForm(true)}
                  className="flex items-center justify-center max-w-[130px] w-full gap-2 p-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded"
                >
                  {language == "en" ? "Buy Now" : "ទិញឥឡូវ"} <FaMoneyBill />
                </button>
              </div>

              {/* buying and add to cart button */}

              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => {
                    addToCart({ id, name, price, image, quantity });

                    // show number added to cart
                    setShowNumberToAdd(true);
                    setTimeout(() => {
                      setShowNumberToAdd(false);
                    }, 500);

                    // show add to cart notification
                    setIsAddedtoCart(true);
                    // show view cart button
                    setShowViewCartBtn(true);
                    // hide view cart button after 2s
                    setTimeout(() => {
                      setShowViewCartBtn(false);
                    }, 2000);
                  }}
                  className="flex items-center justify-center max-w-[130px] w-full gap-2 p-2.5 bg-primary hover:bg-primary-light text-white font-bold rounded relative"
                >
                  {language == "en" ? "Add to Cart" : "បន្ថែមទៅCart"}
                  {showNumberToAdd && (
                    <span className="absolute -right-2 -top-2 text-white  font-bold text-xs bg-red-600 rounded-full w-5 h-5 p-2 grid place-content-center animate-bounce">
                      +{quantity}
                    </span>
                  )}

                  {isAddedtoCart ? (
                    <IoMdCheckmarkCircleOutline className="animate-ping" />
                  ) : (
                    <FaShoppingCart />
                  )}
                </button>

                <CopyToClipboard
                  text={currentURL}
                  onCopy={() => {
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                    }, 5000); // 5s
                  }}
                >
                  <button className="flex items-center justify-center max-w-[130px] w-full gap-2 p-2.5 font-bold rounded bg-blue-500 hover:bg-blue-600 text-white">
                    {language == "en" ? "Copy Link" : "ចម្លងតំណ"}
                    {copied ? (
                      <IoMdCheckmarkCircleOutline className="animate-ping" />
                    ) : (
                      <FaLink />
                    )}
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>

          {/* copy link notification */}

          {copied && (
            <div className="flex flex-col gap-1 w-72 fixed top-1 right-2 z-50 pointer-events-none">
              <AnimatePresence>
                <Notification
                  text={
                    language == "en"
                      ? "Product link is copied!"
                      : "តំណផលិតផលនេះត្រូវបានចម្លង!"
                  }
                  removeNotif={() => setCopied(false)}
                  id={currentURL}
                  bg="bg-blue-500"
                />
              </AnimatePresence>
            </div>
          )}

          {/* add to cart notification */}

          {isAddedtoCart && (
            <div className="flex flex-col gap-1 w-72 fixed top-1 right-2 z-50 pointer-events-none">
              <AnimatePresence>
                <Notification
                  text={`${name} ${
                    language == "en" ? "is added to" : "បានបញ្ជូលទៅក្នុង"
                  } cart!`}
                  removeNotif={() => setIsAddedtoCart(false)}
                  id={id}
                  bg="bg-primary"
                />
              </AnimatePresence>
            </div>
          )}

          {/* popup product image */}
          {showImage && (
            <div className="absolute top-0 right-0">
              <PopupImage image={image} setShowImage={setShowImage} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
ProductDetailCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  productCode: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  productCategoryList: PropTypes.array.isRequired,
  productParams: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  setIsOpenForm: PropTypes.func.isRequired,
};
export default ProductDetailCard;
