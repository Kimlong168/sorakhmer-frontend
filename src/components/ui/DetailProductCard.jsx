import PropTypes from "prop-types";
import { MdOutlineOpenWith } from "react-icons/md";
import PopupImage from "./PopupImage";
import { useState } from "react";
import ContentDisplay from "./ContentDisplay";
import SharingBtn from "./SharingBtn";
import {
  FaBuyNLarge,
  FaLink,
  FaMoneyBill,
  FaShoppingCart,
} from "react-icons/fa";
import { FaBuysellads } from "react-icons/fa6";
const DetailProductCard = ({
  name,
  price,
  image,
  categoryId,
  detail,
  description,
  productCategoryList,
}) => {
  const [showImage, setShowImage] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  //   get current url
  const currentURL = window.location.href;
  return (
    <div className=" w-full mt-5">
      <div className="flex items-center justify-center w-full">
        <div className="border p-4 md:p-8 flex flex-col w-full md:flex-row gap-5 md:gap-24 rounded  bg-white  text-gray-700 shadow-md">
          <div className="w-full md:w-2/5 ">
            <div
              onClick={() => setShowImage(true)}
              className="relative m-0 shadow-xl overflow-hidden rounded  bg-white  text-gray-700"
            >
              {/* product image */}
              <img src={image} className="h-full w-full rounded object-cover" />
              {/* open button */}
              <div className="absolute top-0 rounded text-white cursor-pointer bg-primary grid place-content-center w-[30px] h-[30px]">
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

          {/* product information */}
          <div className="md:p-6 mt-5 w-full">
            {/* product name */}
            <h6 className="block text-4xl">
              <span className=" font-bold">{name}</span>
            </h6>

            {/* category */}
            <h4 className="mb-5 block text-blue-gray-900 ">
              <span>Category: </span>
              {productCategoryList &&
                productCategoryList.map((data) => {
                  if (data.id == categoryId) {
                    return data.categoryName;
                  }
                })}
            </h4>

            {/* description and detail */}
            <div className="pb-8">
              <div className="flex gap-10 items-center w-full font-bold text-xl">
                <div
                  onClick={() => setShowDetail(false)}
                  className={` ${
                    !showDetail && "text-primary border-b-2 border-primary "
                  } cursor-pointer hover:text-black`}
                >
                  Description
                </div>
                <div
                  onClick={() => setShowDetail(true)}
                  className={` ${
                    showDetail && "text-primary border-b-2 border-primary "
                  } cursor-pointer hover:text-black`}
                >
                  Detail
                </div>
              </div>

              <div className="mt-5">
                {showDetail ? (
                  <div>
                    {detail.trim() === "<p><br></p>" || detail.trim() === "" ? (
                      <ContentDisplay htmlString={detail} />
                    ) : (
                      "No Detail"
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

            {/* buying and add to cart button */}

            <div className="flex items-center gap-4  mt-8">
              <button className="flex items-center gap-2 px-2 py-1.5 border bg-green-600 hover:bg-green-500 text-white font-bold rounded">
                Buy Now <FaMoneyBill />
              </button>
              <button className="flex items-center gap-2 px-2 py-1.5 border bg-primary hover:bg-primary-light text-white font-bold rounded">
                Add to Cart <FaShoppingCart />
              </button>
              <button className="flex items-center gap-2 px-2 py-1.5 border font-bold rounded bg-blue-500 hover:bg-blue-600 text-white">
                {" "}
                Copy Link <FaLink />
              </button>
            </div>
          </div>
        </div>

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
DetailProductCard.propTypes = {
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
export default DetailProductCard;