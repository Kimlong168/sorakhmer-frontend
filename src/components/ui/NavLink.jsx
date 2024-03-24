import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// link in the navigation bar with the underline animation
const NavLink = ({ href, title }) => {
  return (
    <div className="flex justify-center hover:text-primary-light">
      <FlyoutLink href={href}>{title}</FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit group"
    >
      <Link to={href} className="relative">
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-primary-light transition-transform duration-300 ease-out"
        />
      </Link>

    </div>
  );
};
NavLink.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
};
FlyoutLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};
export default NavLink;
