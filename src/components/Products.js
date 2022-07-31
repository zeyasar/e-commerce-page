import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Products = () => {

    const { filteredProducts, setDetails, products, loading } = useContext(ProductContext);
    const navigate = useNavigate()
    const [hoverEffects , setHoverEffects]=useState(' opacity-0')
 
    const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#F23030] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer'

    function handleHoverEnter() {
        setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
    }

    function handleHoverExit(){
        setHoverEffects(' opacity-0')
    }

    const handleDetail = (products) => {
        setDetails(products);
        navigate("/details/" + products.id);
      };

    return (
      <>
      {loading && (<div className="p-5 flex flex-wrap">
        {filteredProducts.map((product, index) => (
          <div key={index}
            className="flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative"
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverExit}
          >
            <img src={product.image} alt="product" />
            <div
              className={
                `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
                hoverEffects
              }
            >
              <div className={iconStyle}>
                <ShoppingCartOutlined/>
              </div>
              <div className={iconStyle}>
                <FavoriteBorderOutlined/>
              </div>

              <div className={iconStyle}>
              <button onClick={() => handleDetail({ ...product })}>
                <SearchOutlined/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>)
      }
      {!loading && ( <div className="p-5 flex flex-wrap">
      {products.map((product, index) => (
        <div key={index}
          className="flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative"
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverExit}
        >
          <img src={product.image} alt="product" />
          <div
            className={
              `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
              hoverEffects
            }
          >
            <div className={iconStyle}>
              <ShoppingCartOutlined/>
            </div>
            <div className={iconStyle}>
              <FavoriteBorderOutlined/>
            </div>

            <div className={iconStyle}>
            <button onClick={() => handleDetail({ ...product })}>
              <SearchOutlined/>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>)}
    </> 
    );
};

export default Products;
