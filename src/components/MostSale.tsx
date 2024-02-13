import React from "react";
import "./MostSale.css";
import { useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

export const MostSale = () => {
  const [right, setRight] = useState<number>(0);
  return (
    <>
      <div className="mostSale">
        <div className="header">
          <div>
            <a href="">مشاهده ی همه</a>
          </div>
          <button
            className="carouselBtn next"
            onClick={() => {
              setRight(right + 100);
            }}
          >
            <AiFillCaretLeft />
          </button>
          <button
            className="casrouselBtn prev"
            onClick={() => {
              setRight(right - 100);
            }}
          >
            <AiFillCaretRight />
          </button>
          <div>پر فروشترین ها</div>
        </div>
        <div className="container">
          <div className="carousel" style={{ right: `${right}px` }}>
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
      </div>

      <div className="carousel2">
        <div className="slide2" id="slide1">
          <h2>Slide 1</h2>
        </div>
        <div className="slide2" id="slide2">
          <h2>Slide 2</h2>
        </div>
        <div className="slide2" id="slide3">
          <h2>Slide 3</h2>
        </div>
        <div className="slide2" id="slide4">
          <h2>Slide 4</h2>
        </div>
      </div>
      <a href="#slide2">Link to slide 2</a>
      <div className="slide" id="slide1">
        <a href="#slide4">Previous</a>
        <a href="#slide2">Next</a>
      </div>
      <div className="slide" id="slide2">
        <a href="#slide1">Previous</a>
        <a href="#slide3">Next</a>
      </div>
      <div className="slide" id="slide3">
        <a href="#slide2">Previous</a>
        <a href="#slide4">Next</a>
      </div>
      <div className="slide" id="slide4">
        <a href="#slide3">Previous</a>
        <a href="#slide1">Next</a>
      </div>
    </>
  );
};

export default MostSale;
