import { useContext } from "react";
import toast from "react-hot-toast"; // ✅ added
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  
  const handleRemove = (item) => {
    removeFromCart(item.id);
    toast.error(`${item.name} removed from cart ❌`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border p-2 mb-2"
          >
            <div>
              <h2>{item.name}</h2>
              <p>Qty: {item.qty}</p>
              <p>₹{item.price}</p>
            </div>

            <button
              onClick={() => handleRemove(item)} 
              className="bg-red-500 text-white px-2"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;