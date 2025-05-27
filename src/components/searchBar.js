import React from 'react';

export default function SearchBar({ onSearch }) {
  return (
    <div className="mb-4">
      <input type="text" placeholder="Search products..." onChange={(e) => onSearch(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}