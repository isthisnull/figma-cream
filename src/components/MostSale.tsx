import React from "react";
import "./MostSale.css";
export const MostSale = () => {
  return (
    <div className="mostSale">
      <div className="header">
        <div>
          <a href="">مشاهده ی همه</a>
        </div>
        <div>
          <a href="">asdf</a>
        </div>
        <div>
          <a href="">sa</a>
        </div>
        <div>پر فروشترین ها</div>
      </div>
      <div className="carousel">
        <div className="card">
          <div className="imgContainer">
            <img
              src=".\src\assets\unnamed (1).jpg"
              alt="product"
              className="img"
            />
          </div>
          <div className="info">
            <div className="name">پرایمر براق گلدن رز صورت</div>
            <div className="mainPrice">تومان 129000 </div>
            <div className="salePrice">88000 تومان</div>
          </div>
          <div className="buy">
            <div className="likeBtn"></div>
            <div className="buyBtn"> افزودن به سبد خرید</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostSale;
