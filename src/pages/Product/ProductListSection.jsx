import { useContext, useEffect, useState } from "react";
import DrawOutlineButton from "../../components/ui/DrawOutlineButton";
import { DataContext } from "../../contexts/DataContext";
import { FaSearch } from "react-icons/fa";
import { TbMathEqualLower } from "react-icons/tb";
import ProductCard from "../../components/ui/ProductCard";
import PropType from "prop-types";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../../variants";
// import { Link } from "react-router-dom";
const ProductListSection = () => {
  const { productList, productCategoryList } = useContext(DataContext);
  const [filter, setFilter] = useState("default");
  const [activeProduct, setActiveProduct] = useState(productList);
  const [activeCategory, setActiveCategory] = useState(productCategoryList);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [maxMinPrice, setMaxMinPrice] = useState({
    max: 300,
    min: 1,
  });
  const [priceRange, setPriceRange] = useState(maxMinPrice.max || 100);

  // find min and max price of product
  useEffect(() => {
    if (productList && productList.length > 0) {
      let maxPrice = Math.max(
        ...productList.map((product) => parseFloat(product.price))
      );
      let minPrice = Math.min(
        ...productList.map((product) => parseFloat(product.price))
      );

      console.log("maxPrice", maxPrice);
      console.log("minPrice", minPrice);

      setMaxMinPrice({
        max: parseInt(maxPrice + 1),
        min: parseInt(minPrice + 1),
      });
    }
  }, [productList]);

  // search product
  const handleSearch = (e) => {
    e.preventDefault();
    setFilter("default");
    setPriceRange(maxMinPrice.max);
    let searchedproduct = [];

    // seach product base on name, productCode or price
    if (!isNaN(searchKeyword)) {
      searchedproduct = activeProduct.filter(
        (product) =>
          product.price
            .toString()
            .includes(searchKeyword.toLowerCase().trim()) ||
          product.productCode.toLowerCase() ===
            searchKeyword.toLowerCase().trim()
      );
    } else {
      searchedproduct = activeProduct.filter((product) =>
        product.name
          .toLowerCase()
          .includes(
            searchKeyword.toLowerCase().trim() ||
              product.productCode.toLowerCase() ===
                searchKeyword.toLowerCase().trim()
          )
      );
    }

    setActiveProduct(searchedproduct);
    setIsSearched(true);
    if (searchedproduct.length === 0) {
      setSearchKeyword("");
    }
  };

  // get the category which has active product
  useEffect(() => {
    const activeCategory = productCategoryList.filter((category) => {
      const activeProducts = productList.filter(
        (product) => product.isActive && product.categoryId === category.id
      );
      return activeProducts.length > 0;
    });
    setActiveCategory(activeCategory);
  }, [productList, productCategoryList]);

  // get active product and filter base on category
  useEffect(() => {
    let activeProducts = [];
    if (filter === "default") {
      activeProducts = productList.filter((product) => product.isActive);
      setActiveProduct(activeProducts);
    } else {
      activeProducts = productList.filter(
        (product) => product.isActive && product.categoryId === filter
      );
      setActiveProduct(activeProducts);
    }
    setSearchKeyword("");
    setPriceRange(maxMinPrice.max);
  }, [filter, productList, maxMinPrice]);

  // filter product base on price

  useEffect(() => {
    let filteredProduct = productList.filter(
      (product) =>
        parseFloat(product.price) >= 0 &&
        parseFloat(product.price) <= priceRange &&
        product.isActive
    );

    setActiveProduct(filteredProduct);
    setSearchKeyword("");
    setFilter("default");
  }, [priceRange, productList]);

  return (
    <section className="container p-8 md:pt-0">
      <div className="pt-12 md:py-12">
        {/* all buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-border pb-4  text-lg font-bold">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:justify-start gap-12">
            <div className="flex items-center justify-between lg:justify-start lg:gap-12 w-full">
              {/* set filter to default or show all products */}
              <DrawOutlineButton>
                <button
                  onClick={() => {
                    const activeProduct = productList.filter(
                      (product) => product.isActive
                    );
                    setActiveProduct(activeProduct);
                    setFilter("default");
                    setSearchKeyword("");
                    setPriceRange(maxMinPrice.max);
                  }}
                  className="px-4 py-2 font-bold"
                >
                  All Products
                </button>
              </DrawOutlineButton>

              {/* filter product base on categorys */}
              <DrawOutlineButton>
                <select
                  className="outline-none p-3 cursor-pointer border-none bg-transparent font-bold"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="default">All Categories</option>
                  {activeCategory.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </DrawOutlineButton>
            </div>

            {/* price range */}
            <DrawOutlineButton>
              <div className="px-4 py-2 ">
                <PriceRangeFilter
                  minPrice={maxMinPrice.min}
                  maxPrice={maxMinPrice.max}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                />
              </div>
            </DrawOutlineButton>
          </div>

          {/* search bar */}
          <DrawOutlineButton>
            <form className="w-full lg:w-auto " onSubmit={handleSearch}>
              <div className="flex items-center gap-3 px-4 py-2 border">
                {/* search input */}
                <input
                  className="outline-none border-none p-1 w-full bg-transparent"
                  type="text"
                  placeholder="Search..."
                  name="search"
                  value={searchKeyword}
                  // onBlur={() => setIsSearched(false)}
                  onChange={(e) => {
                    setSearchKeyword(e.target.value);
                    // setIsSearched(false);
                  }}
                />

                {/* search icon */}
                <div onClick={handleSearch}>
                  <FaSearch />
                </div>
              </div>
            </form>
          </DrawOutlineButton>
        </div>

        {/* result search for text */}
        {isSearched && searchKeyword.length !== 0 && (
          <div className="mt-8 ">
            Search result for{" "}
            <span className="text-primary font-bold">
              &quot;{searchKeyword}&ldquo;
            </span>
          </div>
        )}

        {maxMinPrice.max != priceRange && (
          <div className="mt-8 flex items-center gap-2">
            Result for price <TbMathEqualLower /> {priceRange} $
          </div>
        )}

        <div className="flex gap-5">
          {/* product list */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {activeProduct.length > 0 ? (
              activeProduct.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : (
              <div className="text-center col-span-4 h-[100px]">
                <motion.div
                  variants={fadeIn("up", 0)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0 }}
                >
                  No product found
                </motion.div>
              </div>
            )}
          </div>

          {/* side bars */}
          {/* <div className="h-full shadow-xl hidden md:block lg:w-[25%]"></div> */}
        </div>
      </div>
    </section>
  );
};

const PriceRangeFilter = ({
  minPrice = 1,
  maxPrice = 300,
  priceRange,
  setPriceRange,
}) => {
  const handleChange = (event) => {
    setPriceRange(parseInt(event.target.value));
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex items-center">
        <label className="mr-2 font-bold whitespace-pre">Price Range:</label>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={priceRange}
          onChange={(event) => handleChange(event)}
          className=" appearance-none w-24 md:w-48 h-1 md:h-2 bg-primary rounded-full outline-none cursor-pointer"
        />
        <span className="ml-2 flex items-center gap-2 whitespace-pre">
          <TbMathEqualLower /> {priceRange} $
        </span>
      </div>
    </div>
  );
};

PriceRangeFilter.propTypes = {
  minPrice: PropType.number,
  maxPrice: PropType.number,
  priceRange: PropType.number,
  setPriceRange: PropType.func,
};

export default ProductListSection;
