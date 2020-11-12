import React from "react";
import "./Home.css";
import Product from "./Product";
import uuid from "react-uuid";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_1x._CB419795291_.jpg"
          alt="amazon-home-img"
        />
        <div className="home__row">
          <Product
            id={uuid()}
            title="Dell Latitude 5480 Business Laptop, 14 Inch FHD Touchscreen (Intel Core 7th Generation i5-7300U, 8GB DDR4, 256GB SSD) Windows 10 Pro (Renewed)"
            price={400.99}
            image="https://m.media-amazon.com/images/I/61U3A3R5LrL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id={uuid()}
            title="Dell Latitude 5480 Business Laptop, 14 Inch FHD Touchscreen (Intel Core 7th Generation i5-7300U, 8GB DDR4, 256GB SSD) Windows 10 Pro (Renewed)"
            price={403.99}
            image="https://m.media-amazon.com/images/I/619zxIDdlPL._AC_UY218_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id={uuid()}
            title="The Laptop new MOdel"
            price={540.99}
            image="https://m.media-amazon.com/images/I/61aqiCPKwcL._AC_UY218_.jpg"
            rating={2}
          />
          <Product
            id={uuid()}
            title="The Laptop new MOdel"
            price={240.99}
            image="https://m.media-amazon.com/images/I/619zxIDdlPL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id={uuid()}
            title="The Laptop new MOdel"
            price={840.99}
            image="https://m.media-amazon.com/images/I/619zxIDdlPL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={uuid()}
            title="Dell XPS 13 9360 13.3in Full HD Anti-Glare InfinityEdge Display (non-touch) Laptop - Silver, Intel Core i5-8250U, 8GB LPDDR3-1866, 256GB Solid State Drive SSD (Renewed)"
            price={410.99}
            image="https://m.media-amazon.com/images/S/aplus-media/vc/2f4b36d9-62a2-4bd4-96d6-74045f53c521.__CR0,0,800,600_PT0_SX800_V1___.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
