import React from "react";

export default function Category({selectedCategory, onSelect}){
  let categories = ['ebooks','music','templates','ui designs'];

  return(
    <div className="bg-[#E8EBEE]">
    <h2 className="text-xl font-semibold mb-4 m-3 my-2">Categories</h2>
    <ul className="space-y-2 m-3">
      {categories.map(category => (
        <li key={category}>
          <button onClick={()=>onSelect(category)} className={`text-left w-full px-2 py-1 rounded hover:bg-gray-100 ${
          selectedCategory === category ? 'bg-blue-100 text-blue-600 font-medium' : ''}`}>
            {category}
          </button>
        </li>
      ))}
        <li>
          <button onClick={() => onSelect('')} className="text-left w-full px-2 py-1 text-gray-500 hover:bg-gray-100">
            Show All
          </button>
        </li>
    </ul>
    </div>
  );
}