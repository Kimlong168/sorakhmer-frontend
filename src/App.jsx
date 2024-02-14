import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataContext } from "./contexts/DataContext";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Process from "./pages/Process";
import Error404 from "./pages/Error404";
import Distillery from "./pages/Distillery";
import Blog from "./pages/Blog";
export default function App() {
  const [productCategoryList, setProductCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [blogCategoryList, setBlogCategoryList] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [authorList, setAuthorList] = useState([]);
  const [partnerList, setPartnerList] = useState([]);
  const [awardList, setAwardList] = useState([]);
  const [contact, setContact] = useState([]);
  const [processList, setProcessList] = useState([]);
  const [storeList, setStoreList] = useState([]);
  const [galleryList, setGalleryList] = useState([]);

  // fetch all the data from database
  useEffect(() => {
    const productCollectionRef = collection(db, "products");
    const productCategoryCollectionRef = collection(db, "product_category");
    const blogCollectionRef = collection(db, "blogs");
    const blogCategoryCollectionRef = collection(db, "blog_category");
    const authorCollectionRef = collection(db, "authors");
    const partnerCollectionRef = collection(db, "partners");
    const awardCollectionRef = collection(db, "awards");
    const contactCollectionRef = collection(db, "contact");
    const processCollectionRef = collection(db, "process");
    const storeCollectionRef = collection(db, "stores");
    const galleryCollectionRef = collection(db, "gallery");

    const fetchAllData = async () => {
      // fetch data of product
      const products = await getDocs(productCollectionRef);
      setProductList(
        products.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

      // fetch data of product category
      const productCategory = await getDocs(productCategoryCollectionRef);
      setProductCategoryList(
        productCategory.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

      //fetch data of blog
      const blogs = await getDocs(blogCollectionRef);
      setBlogList(blogs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      //fetch data of blog category
      const blogCategory = await getDocs(blogCategoryCollectionRef);
      setBlogCategoryList(
        blogCategory.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

      //fetch data of author
      const author = await getDocs(authorCollectionRef);
      setAuthorList(author.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      //fetch data of partner
      const partner = await getDocs(partnerCollectionRef);
      setPartnerList(
        partner.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

      // fetch data of award
      const award = await getDocs(awardCollectionRef);
      setAwardList(award.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      //fetch contact data
      const contact = await getDocs(contactCollectionRef);
      setContact(contact.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      //fetch process data
      const process = await getDocs(processCollectionRef);
      setProcessList(
        process.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

      //fetch store data
      const store = await getDocs(storeCollectionRef);
      setStoreList(store.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      //fetch gallery data
      const gallery = await getDocs(galleryCollectionRef);
      setGalleryList(
        gallery.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    // call fetchAllData function
    fetchAllData();
    console.log("fetch data");
  }, []);
  return (
    <>
      <DataContext.Provider
        value={{
          productCategoryList,
          productList,
          blogCategoryList,
          blogList,
          authorList,
          awardList,
          partnerList,
          contact,
          processList,
          storeList,
          galleryList,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/process" element={<Process />} />
            <Route path="/distillery" element={<Distillery />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </DataContext.Provider>
    </>
  );
}
