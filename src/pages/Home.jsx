import { useEffect, useState } from "react";
import axios from "axios"; 
import NavBar from "../component/NavBar";
import ProductCard from "../component/ProductCard";
import Filters from "../component/Filter";
import Banner from "../component/Banner";
import Footer from "../component/Footer";

function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  console.log("Products state:", products);

  // ✅ API CALL
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        console.log("API response:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Fetch error:", err);
      });
  }, []);

  // 🔥 FIXED: NO FILTERING (TEMPORARY)
  let filtered = [...products];

  // 🔃 Sorting still works
  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar setSearch={setSearch} />
      <Banner />
      <Filters setCategory={setCategory} setSort={setSort} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 grow">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <h2 className="text-center col-span-full text-gray-500">
            No products found
          </h2>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;