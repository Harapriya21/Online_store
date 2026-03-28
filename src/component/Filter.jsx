
import React from "react";

const Filters = ({
  category,
  setCategory,
  sort,
  setSort,
  rating,
  setRating
}) => {
  return (
    <div className="p-4 bg-gray-100 flex flex-wrap gap-4">

      
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Home Appliances</option>
        <option>Books</option>
      </select>

      
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low">Price Low → High</option>
        <option value="high">Price High → Low</option>
        <option value="rating">Rating High → Low</option>
      </select>

      
      <select onChange={(e) => setRating(e.target.value)}>
        <option value="">All Ratings</option>
        <option value="4">4★ & above</option>
        <option value="3">3★ & above</option>
      </select>
    </div>
  );
};

export default Filters;
