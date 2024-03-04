import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

// this is the main layout of the website
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
