import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find(p => p.id === Number(id));

  
  if (!product) {
    return <h2 className="p-10 text-red-500">Product not found</h2>;
  }

  return (
    <div className="p-10">
      
      <img
        src={product.image}
        className="w-60"
        onError={(e) =>
          (e.target.src = "https://via.placeholder.com/200")
        }
      />

      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>₹{product.price}</p>
      <p>⭐ {product.rating}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-4 py-2 mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;