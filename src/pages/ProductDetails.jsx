import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <h2 className="p-10 text-red-500">Loading...</h2>;
  }

  return (
    <div className="p-10">

      <img
        src={product.image || "https://via.placeholder.com/200"}
        className="w-60"
        alt={product.name}
      />

      <h1 className="text-2xl font-bold">
        {product.name || "No Name"}
      </h1>

      <p>₹{product.price || 0}</p>

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