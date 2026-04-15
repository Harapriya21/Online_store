import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name || "Product"} added to cart 🛒`);
  };

  return (
    <div className="border rounded-lg p-4 shadow">

      <Link to={`/product/${product._id}`}>
        <img
          src={product.image || "https://via.placeholder.com/200"}
          alt={product.name || "Product"}
          className="h-40 w-full object-contain mb-4"
        />
      </Link>

      <h2 className="text-lg font-semibold">
        {product.name || "No Name"}
      </h2>

      <p className="text-gray-600">
        ₹ {product.price || 0}
      </p>

      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 mt-3 w-full rounded"
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;