import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import Navbar from "./Navbar";

function Details() {
  const {details} = useContext(ProductContext)
  
  return (
    <div>
      <Navbar/>
      <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={details.image}
            className="product_img"
            alt="product_image"
          />
        </div>
        <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            {details.title}
          </h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
            {details.description}
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-3xl">
              Price: <b>${details.price}</b>
            </p>

            <div className="colors flex mt-7 text-2xl">
              Colors
              <div className="colorSelect bg-red-600 "></div>
              <div className="colorSelect bg-blue-600 "></div>
              <div className="colorSelect bg-yellow-400 "></div>
            </div>

            <div className="mt-7 text-2xl">
              Size
              <select className="border-[2px] border-silver rounded-md ml-5">
                <option selected>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>
          </div>

          <button className="text-white bg-[#F23030] rounded-md shadow-md mt-[30px] p-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details