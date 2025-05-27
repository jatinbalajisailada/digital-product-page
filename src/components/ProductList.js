import React from "react";

export default function ProductList({ products }) {
  if (products.length === 0) {
    return <p className="text-gray-500 text-center mt-6">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition duration-300" >
          {/* Image placeholder */}
          <div className="bg-gray-100 h-40 flex items-center justify-center text-gray-400 text-sm">
            Image Placeholder
          </div>

          {/* Product content */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-blue-600 font-bold text-md">${product.price}</span>
              <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
