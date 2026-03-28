import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar({ setSearch }) {
  const { cart } = useContext(CartContext);

  
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="flex items-center justify-between bg-blue-600 text-white px-6 py-3 shadow-md">

      
      <h1 className="text-xl font-bold cursor-pointer hover:scale-105 transition flex items-center gap-2">
        
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
          S
        </span>

        <span className="text-xl font-extrabold tracking-tight text-white">
          Snap<span className="text-gray-200">Shop</span>
        </span>

      </h1>

      
      <div className="flex items-center bg-white rounded-lg overflow-hidden w-1/3">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-3 py-1 text-black outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="px-3 text-gray-500">🔍</span>
      </div>

      
      <div className="flex items-center gap-6">

        
        <Link to="/cart" className="relative hover:scale-110 transition">
          🛒

          
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        
        <span className="cursor-pointer hover:scale-110 transition">
          👤
        </span>
      </div>
    </div>
  );
}

export default Navbar;