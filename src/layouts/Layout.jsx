import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import ViewCartButton from "../components/ui/ViewCartButton";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

// this is the main layout of the website
const Layout = ({ children }) => {
  const { showViewCartBtn } = useContext(DataContext);
  return (
    <div className="dark:bg-gray-950 dark:text-white">
      <Header />
      {children}

      {/* view cart button */}
      {showViewCartBtn && <ViewCartButton />}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
