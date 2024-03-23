import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import ViewCartButton from "../components/ui/ViewCartButton";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
// import kbachkhmer from "../assets/images/kbachkhmer.png";
// this is the main layout of the website
const Layout = ({ children }) => {
  const { showViewCartBtn } = useContext(DataContext);
  return (
    <div className="bg-gray-100 dark:bg-gray-950 dark:text-white">
      <Header />
      {children}

      {/* view cart button */}
      {showViewCartBtn && <ViewCartButton />}
      {/* <div>
        <img
          className="w-[400px]  absolute rotate-45 opacity-20 top-[600px] -left-[70px] "
          src={kbachkhmer}
          alt="kbachkhmer"
        />
      </div> */}

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
