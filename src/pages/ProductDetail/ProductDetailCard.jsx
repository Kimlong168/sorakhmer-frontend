import PropTypes from "prop-types";
import { MdOutlineOpenWith } from "react-icons/md";
import PopupImage from "../../components/ui/PopupImage";
import { useContext, useState } from "react";
import ContentDisplay from "../../components/ui/ContentDisplay";
import SharingBtn from "../../components/ui/SharingBtn";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaLink, FaShoppingCart } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import Notification from "../../components/ui/Notification";
import { DataContext } from "../../contexts/DataContext";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const ProductDetailCard = ({
  id,
  name,
  price,
  image,
  categoryId,
  detail,
  description,
  productCategoryList,
}) => {
  const { addToCart } = useContext(DataContext);
  const [showImage, setShowImage] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isAddedtoCart, setIsAddedtoCart] = useState(false);
  //   get current url
  const currentURL = window.location.href;

  return (
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
                className="h-full w-full rounded object-cover  cursor-zoom-in"
              />
              {/* open button */}
              <div className="absolute top-0  rounded text-white cursor-pointer bg-primary grid place-content-center w-[30px] h-[30px]">
                <MdOutlineOpenWith />
              </div>
            </div>
            <div>
              <div className="font-semibold text-center p-4">
                Share this product
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
              <h4 className="mb-5 text-blue-gray-900 flex items-center gap-2">
                <span>Category: </span>
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
              <div className="pb-8 ">
                <div className="flex gap-10 items-center w-full font-bold text-xl">
                  <div
                    onClick={() => setShowDetail(false)}
                    className={` ${
                      !showDetail &&
                      "hover:text-primary border-b-2 border-primary "
                    } cursor-pointer dark:text-white/70`}
                  >
                    Description
                  </div>
                  <div
                    onClick={() => setShowDetail(true)}
                    className={` ${
                      showDetail &&
                      "hover:text-primary border-b-2 border-primary "
                    } cursor-pointer dark:text-white/70`}
                  >
                    Detail
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

              {/* price */}
              <div className="flex items-center gap-8 mt-8">
                Price:
                <h5 className="font-bold text-4xl">
                  $ {`${price}${!price.includes(".") ? ".00" : ""}`}
                </h5>
              </div>
            </div>

            {/* buying and add to cart button */}

            <div className="flex items-center gap-4  mt-8">
              {/* <button className="flex items-center gap-2 px-2 py-1.5 border bg-green-600 hover:bg-green-500 text-white font-bold rounded">
                Buy Now <FaMoneyBill />
              </button> */}
              <button
                onClick={() => {
                  // const isAdded = addToCart({ id, name, price, image });
                  addToCart({ id, name, price, image });
                  setIsAddedtoCart(true);
                }}
                className="flex items-center gap-2 p-2.5 border bg-primary hover:bg-primary-light text-white font-bold rounded"
              >
                Add to Cart
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
                <button className="flex items-center gap-2 p-2.5 border font-bold rounded bg-blue-500 hover:bg-blue-600 text-white">
                  Copy Link
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
                text="Product link is copied!"
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
                text={`${name} is added to cart!`}
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
};
export default ProductDetailCard;
