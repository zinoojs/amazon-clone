import React from "react";
import "./Product.css";

function Product({ title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img src={image} alt="amazon-image" />
      <button className="product__button">Add to Basket</button>
    </div>
  );
}

export default Product;
