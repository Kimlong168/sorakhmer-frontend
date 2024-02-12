import Header from "../components/Header";
import Footer from "../components/Footer";

import PropTypes from "prop-types";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
