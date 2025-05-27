import React, { useState, useEffect } from 'react';
import SearchBar from "./searchBar";
import Category from './Category';
import ProductList from './ProductList';

export default function Body(){
  const [selectedCategory, setSelectedCategory] = useState('')  //selected category default value is '' => means it shows everything
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const sampleData = [
      { id: 1, name: 'React Ebook', price: 10, description: 'Learn React from scratch', rating: 4.5, image: '', category: 'ebooks' },
      { id: 2, name: 'Music Pack', price: 5, description: 'Royalty-free music', rating: 4.0, image: '', category: 'music' },
      { id: 3, name: 'UI Templates', price: 15, description: 'Figma designs', rating: 5.0, image: '', category: 'templates' },
      { id: 4, name: 'React Ebook', price: 10, description: 'Learn React from scratch', rating: 4.5, image: '', category: 'ebooks' },
      { id: 5, name: 'Music Pack', price: 5, description: 'Royalty-free music', rating: 4.0, image: '', category: 'music' },
      { id: 6, name: 'UI Templates', price: 15, description: 'Figma designs', rating: 5.0, image: '', category: 'templates' },
      { id: 7, name: 'React Ebook', price: 10, description: 'Learn React from scratch', rating: 4.5, image: '', category: 'ebooks' },
      { id: 8, name: 'Music Pack', price: 5, description: 'Royalty-free music', rating: 4.0, image: '', category: 'music' },
      { id: 9, name: 'UI Templates', price: 15, description: 'Figma designs', rating: 5.0, image: '', category: 'templates' },
    ];
  setProducts(sampleData); //load into state
  }, []);
  
  const filteredProducts = products.filter(product => { //in filter if it returns true only then showed
    let matchCategory = selectedCategory ? product.category === selectedCategory : true;  //If a category is selected, only include products from that category.
                                                                                          //If no category is selected, include all products.
    let matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());  //display only what is searched
    return matchCategory && matchSearch;  //both the above conditions are to be satisfied and filter them out
  });

  return(
    <div className="flex pb-1">
    <div className="leftHalf w-1/4 pr-4 border-r min-h-screen bg-[#E8EBEE]">
      <Category selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
    </div>
    <div className="rightHalf flex flex-col mx-auto w-3/4 pl-4 mr-4">
      <SearchBar onSearch={setSearchTerm} />
      <ProductList products={filteredProducts} />
    </div>
    </div>
  );
}