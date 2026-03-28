import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">E-Commerce</h2>
          <p className="mt-3 text-gray-400">
            Your one-stop shop for all your needs. Quality products at the best prices.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer">Shop</li>
            <li className="hover:text-cyan-400 cursor-pointer">Cart</li>
            <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Email: support@ecommerce.com</p>
          <p className="text-gray-400 mt-2">Phone: +91 9876543210</p>
        </div>

      </div>

      
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © 2026 E-Commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;