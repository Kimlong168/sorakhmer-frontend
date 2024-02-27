import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const CartItemsSection = () => {
  const { cartItems } = useContext(DataContext);
  return (
    <section className="container p-8 md:p-0">
      <div className="pt-8">
        <h1 className="text-2xl md:text-4xl font-bold">Cart</h1>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CartItemsSection;
