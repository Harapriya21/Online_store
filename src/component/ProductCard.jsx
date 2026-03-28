import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart 🛒`);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      
      
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-contain mb-4"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/200")
          }
        />
      </Link>

      
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <p className="text-yellow-500">⭐ {product.rating}</p>

      
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 mt-3 w-full rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;