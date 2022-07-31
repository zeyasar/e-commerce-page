import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })

    },[])

    const allCategories = ['all']
    products.map(item => allCategories.indexOf(item.category) !== -1 ? null : allCategories.push(item.category))
    const [categories] = useState(allCategories)
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [details,setDetails] = useState({})
    console.log(products)
    console.log(filteredProducts)
    console.log(loading);
    const productFilter = (category) => {
        setLoading(true)
        if (category === 'all') {
            setFilteredProducts(products)
            
        } else {
            const newItems = products.filter((item)=>item.category === category)
            setFilteredProducts(newItems)
        }
    }

    
    return (
        <ProductContext.Provider value={{categories, productFilter, products, filteredProducts, details, setDetails, loading}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;