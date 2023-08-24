import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productAction';
import "./productDetails.css"

const ProductDetails = () => {
  let product = useSelector((state)=>state.product);
  const { image, title, price, category, description } = product;
  const {productId} = useParams();
  const dispatch =useDispatch();
  console.log(product);

  const fetchDetails = async()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
      console.log("err: ",err)
    })
    dispatch(selectedProduct(response?.data));
  }

  
  useEffect(()=>{
    if(productId && productId!=="")
    fetchDetails();
  return ()=>{
    dispatch(removeSelectedProduct());
  }
  },[productId]);

    return (
      <div className="product-container">
  {Object.keys(product).length === 0 ? (
    <div className="loading">...Loading</div>
  ) : (
    <div className="product">
      <div className="product-details">
        {/* <div className="product-badge">AND</div> */}
        <div className="product-content">
          <div className="productImage">
            <img className="product-image" src={image} alt="Product" />
          </div>
          <div className="product-info">
            <h1 className="title">{title}</h1>
            <h2 className="price">
              <a className="price-link">${price}</a>
            </h2>
            <h3 className="productCategory">{category}</h3>
            <p className="description">{description}</p>
            <div className="add-to-cart" tabIndex="0">
              <div className="cart-icon">
                <i className="icon"></i>
              </div>
              <div className="cart-button">Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default ProductDetails
