import { useState } from "react";
import products from "../data/products";
import NavBar from "../component/NavBar";
import ProductCard from "../component/ProductCard";
import Filters from "../component/Filter";
import Banner from "../component/Banner";
import Footer from "../component/Footer";

function Home() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  let filtered = [...products];

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  
  if (search) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  
  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

  return (
    <div className="flex flex-col min-h-screen">
      
      
      <NavBar setSearch={setSearch} />
      <Banner />
      <Filters setCategory={setCategory} setSort={setSort} />

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 grow">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
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