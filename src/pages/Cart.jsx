import { useContext } from "react";
import toast from "react-hot-toast";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  // ❌ remove item
  const handleRemove = (item) => {
    removeFromCart(item._id); // ⚠️ if using MongoDB, change to item._id
    toast.error(`${item.name} removed from cart ❌`);
  };

  // ✅ place order (API integration)
  const placeOrder = async () => {
    const orderData = {
      orderItems: cart.map((item) => ({
        name: item.name,
        qty: item.qty,
        price: item.price,
        product: item._id || item.id, // 🔥 important
      })),
      totalPrice: cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      ),
    };

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();
      console.log(data);

      toast.success("Order placed successfully 🎉");
    } catch (error) {
      console.log(error);
      toast.error("Failed to place order ❌");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item._id || item.id}
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
          ))}

          {/* Total Price */}
          <h2 className="text-xl font-bold mt-4">
            Total: ₹
            {cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
          </h2>

          {/* Place Order Button */}
          <button
            onClick={placeOrder}
            className="bg-green-600 text-white px-4 py-2 mt-4"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;