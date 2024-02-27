import BackToPrevBtn from "../../components/ui/BackToPrevBtn";
import GoToTop from "../../components/ui/GoToTop";
import PropType from "prop-types";
import ProductCard from "../../components/ui/ProductCard";

const RelatedProduct = ({ relatedProduct }) => {
  return (
    <div>
      {/* related content */}
      {relatedProduct.length !== 0 && (
        <div className="mb-8">
          <div className="text-white font-semibold  bg-primary px-5 py-3 mt-8 rounded-sm flex items-center justify-between">
            <small className="border-l-[5px] pl-5 border-white text-lg md:text-xl uppercase ">
              Related Products
            </small>
          </div>

          {/* related content blog card for big screen */}
          <div className="grid md:hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-7 mt-5">
            <RelatedProductContainer
              numberToShow={4}
              relatedProduct={relatedProduct}
            />
          </div>

          {/* related content blog card for small screen */}
          <div className="hidden md:grid lg:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-7 mt-5">
            <RelatedProductContainer
              numberToShow={3}
              relatedProduct={relatedProduct}
            />
          </div>
        </div>
      )}

      {/* back to previous page button */}
      <div className="mb-8">
        <BackToPrevBtn />
      </div>

      {/* goto top */}
      <GoToTop />
    </div>
  );
};

const RelatedProductContainer = ({ relatedProduct, numberToShow }) => {
  return (
    <>
      {relatedProduct.slice(0, numberToShow).map((data) => {
        return (
          <div key={data.id}>
            <ProductCard product={data} />
          </div>
        );
      })}
    </>
  );
};

RelatedProductContainer.propTypes = {
  relatedProduct: PropType.array,
  numberToShow: PropType.number,
};
RelatedProduct.propTypes = {
  relatedProduct: PropType.array,
};
export default RelatedProduct;
