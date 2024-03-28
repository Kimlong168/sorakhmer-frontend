import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom";
import { DataContext } from "./contexts/DataContext";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Process from "./pages/Process";
import Error404 from "./pages/Error404";
import Distillery from "./pages/Distillery";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import ShoppingCart from "./pages/ShoppingCart";
import GotoAdminDashboard from "./pages/GotoAdminDashboard";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "dark"
  );
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language") : "kh"
  );
  const [productCategoryList, setProductCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [blogCategoryList, setBlogCategoryList] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [authorList, setAuthorList] = useState([]);
  const [partnerList, setPartnerList] = useState([]);
  const [awardList, setAwardList] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [processList, setProcessList] = useState([]);
  const [storeList, setStoreList] = useState([]);
  const [galleryList, setGalleryList] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  const [showViewCartBtn, setShowViewCartBtn] = useState(false);

  // Update local storage when cartItems state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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
      const products = await getDocs(
        // productCollectionRef,
        query(productCollectionRef, orderBy("categoryId", "desc"))
      );
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
      setContactList(
        contact.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

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

  // add to cart
  const addToCart = (product) => {
    // find if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);

    //if it exists add quantity
    if (existingProduct) {
      existingProduct.quantity += product.quantity ? product.quantity : 1;
      setCartItems([...cartItems]);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return true;
    }

    // if it is a new item
    let quantity = product.quantity ? product.quantity : 1;
    product = { ...product, quantity: quantity };
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    const newCartItems = [...cartItems, product];
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  // dark mode and light mode

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = (newMode) => {
    if (theme === "dark" && newMode === "light") {
      localStorage.setItem("mode", "light");
      setTheme("light");
    } else if (theme === "light" && newMode === "dark") {
      localStorage.setItem("mode", "dark");
      setTheme("dark");
    }
  };

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
          contactList,
          processList,
          storeList,
          galleryList,
          cartItems,
          setCartItems,
          addToCart,
          theme,
          handleThemeSwitch,
          showViewCartBtn,
          setShowViewCartBtn,
          language,
          setLanguage,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/process" element={<Process />} />
            <Route path="/distillery" element={<Distillery />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/admin" element={<GotoAdminDashboard />} />
          </Routes>
        </Router>
      </DataContext.Provider>
    </>
  );
}
