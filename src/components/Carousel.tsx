import React from "react";
import MostSale from "./MostSale";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
function Carousel() {
  return (
    <div className="carousel1">
      <button className="carouselBtn next" onClick={() => {}}>
        <AiFillCaretLeft />
      </button>
      <button className="casrouselBtn prev">
        <AiFillCaretRight />
      </button>
      <ul>
        <li className="slide">
          <img src=".\src\assets\unnamed (1).jpg" alt="image #1" />
        </li>
        <li className="slide">
          <img src=".\src\assets\unnamed (1).jpg" alt="image #2" />
        </li>
        <li className="slide">
          <img src=".\src\assets\unnamed (1).jpg" alt="image #3" />
        </li>
      </ul>
    </div>
  );
}

export default Carousel;
