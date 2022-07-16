import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";


const ProductsList = () => {
    const products = useSelector((state)=> state);
    const dispatch = useDispatch();

    const fetchProducts = async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products").catch(err=>{
            console.log("Err", err);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
      fetchProducts();
      // eslint-disable-next-line
    }, [])
    
    console.log("Products:", products)
  return (
    <div className="container">
        <ProductComponent/>
    </div>
  )
}

export default ProductsList