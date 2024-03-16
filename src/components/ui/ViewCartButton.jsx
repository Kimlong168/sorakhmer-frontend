import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import scrollTop from "../../utils/scrollTop";
export default function Component() {
  const { cartItems } = useContext(DataContext);
  return (
    <div
      className="fixed bottom-5 left-[50%] -translate-x-[50%] z-10"
      onClick={scrollTop}
    >
      <Link to="/cart">
        <button className=" flex justify-center items-center gap-3 animate-bounce p-3 border border-gray-800/70 bg-white/60 dark:border-primary dark:text-primary dark:bg-gray-950/60 rounded">
          <ShoppingCartIcon className="h-6 w-6" />
          View Cart <span className="text-red-600">({cartItems.length})</span>
        </button>
      </Link>
    </div>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
