import React from "react";
import { IconName } from "react-icons/go";
function Carousel() {
  return (
    <div>
      <button className="carouselBtn next"></button>
      <button className="casrouselBtn prev"></button>
      <ul>
        <li className="slide">
          <img src=".\src\assets\unnamed (1).jpg" alt="image #2" />
        </li>
        <li className="slide">
          <img src=".\src\assets\unnamed (1).jpg" alt="image #2" />
        </li>
        <li className="slide">
          <img src=".\src\assets\unnamed (1).jpg" alt="image #2" />
        </li>
      </ul>
    </div>
  );
}

export default Carousel;
