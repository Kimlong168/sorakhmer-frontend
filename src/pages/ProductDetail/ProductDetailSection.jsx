import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import DetailProductCard from "../../components/ui/DetailProductCard";
import RelatedProduct from "./RelatedProduct";
import Loading from "../../components/ui/Loading";
const ProductDetailSection = () => {
  const { id: productParams } = useParams();
  const { productList, productCategoryList } = useContext(DataContext);
  const [data, setData] = useState(null);

  //   fetch data from firestore by id or param
  useEffect(() => {
    const productRef = doc(db, "products", productParams);

    const fetchData = async () => {
      try {
        const docSnap = await getDoc(productRef);
        if (docSnap.exists()) {
          const data = docSnap.data();

          setData(data);

          console.log("detail data", data);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, [productParams, productCategoryList]);

  //   get related content
  const relatedProduct = productList.filter((product) => {
    return (
      product.categoryId === data?.categoryId &&
      product.id !== productParams &&
      product.isActive
    );
  });

  // if the data is not fetched yet
  if (!data) {
    return (
      <div className="min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <section className="container p-4 md:p-0">
      {/* detail product */}
      <div className="mt-3 md:mt-5 flex justify-between items-center">
        <DetailProductCard
          {...data}
          id={productParams}
          productCategoryList={productCategoryList}
        />
      </div>

      {/* related container */}

      <RelatedProduct relatedProduct={relatedProduct} />
    </section>
  );
};

export default ProductDetailSection;
