import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./productcomponent.css"

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, price, title, image, category } = product;
    return (
      <div className="card" key={id}>
        <Link to={`/products/${id}`} className="link">
             <div className="image">
                <img src={image} alt="productimage" className="img" />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="price">$ {price}</div>
                <div className="category">{category}</div>
              </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
