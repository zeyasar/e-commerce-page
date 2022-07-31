import React, { useContext } from "react";
import allCategories from '../assets/all.jpg'
import mens from '../assets/mens.jpg'
import womens from '../assets/womens.jpg'
import jewelery from '../assets/jewelry.jpg'
import electronics from '../assets/electronics.jpg'
import { ProductContext } from "../context/ProductContext";



const Categories = () => {
    const {productFilter} = useContext(ProductContext)
    // console.log(filteredProducts)
  return (
    <div className="grid grid-cols-5  p-5 mobile:flex-col">
      <button onClick={()=> productFilter('all')}>
        <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
          <img src={allCategories} className="w-[100%]" alt="category_img" />
          <div className="justify-center">
            <h2 className="font-medium text-m">All Categories</h2>
          </div>
        </div>
      </button>
      <button onClick={()=> productFilter(`men's clothing`)}>
      <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
          <img src={mens} className="w-[100%]" alt="category_img" />
          <div className="justify-center">
            <h2 className="font-medium text-m">Men's Clothing</h2>
          </div>
        </div>
      </button>
      <button onClick={()=> productFilter(`women's clothing`)}>
      <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
          <img src={womens} className="w-[100%]" alt="category_img" />
          <div className="justify-center">
            <h2 className="font-medium text-m">Women's Clothing</h2>
          </div>
        </div>
      </button>
      <button onClick={()=> productFilter(`jewelery`)}>
      <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
          <img src={jewelery} className="w-[100%]" alt="category_img" />
          <div className="justify-center">
            <h2 className="font-medium text-m">Jewelery</h2>
          </div>
        </div>
      </button>
      <button onClick={()=> productFilter(`electronics`)}>
      <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
          <img src={electronics} className="w-[100%]" alt="category_img" />
          <div className="justify-center">
            <h2 className="font-medium text-m">Electronics</h2>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Categories;
