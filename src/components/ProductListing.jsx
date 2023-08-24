import React,{useEffect} from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from "./ProductComponent";
import { setProducts } from '../redux/actions/productAction';
import "./productListing.css"


const ProductListing = () => {
  const products = useSelector((state)=>state);
  const dispatch = useDispatch();

  const fetchProducts = async()=>{
    const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
      console.log("err",err)
    })
    dispatch(setProducts(response.data));
  }

  useEffect(()=>{
    fetchProducts();
  },[])
  console.log("products: ", products);
  return (
    <div className='mainContainer'>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing;


