"use client";

import { Products } from "@/app/search-filter/page";
import { ChangeEvent, useState } from "react";

interface SearchFilterProductsProps {
  products: Products[];
}

const SearchFilterProducts: React.FC<SearchFilterProductsProps> = ({
  products,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product: Products, index) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchQuery(value);
  };

  return (
    <div className="p-6">
      <div className=" bg-red-600">
        <label htmlFor="" className="flex items-center justify-center">
          Search :
          <input
            className="primary-input m-4"
            type="text"
            name="search"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="p-4 grid grid-cols-5 gap-4">
        {filteredProducts.map((product: Products) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-32 object-cover"
            />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-green-600 font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilterProducts;
