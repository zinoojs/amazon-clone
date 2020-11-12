import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
function Checkoput() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_LP_Dash_en_US.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping basket</h2>
          {/*  */}
          {/*  */}
          {/*  */}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkoput;
