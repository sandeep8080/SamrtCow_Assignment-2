import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import ColorThief from "../../node_modules/colorthief/dist/color-thief.mjs";

const Carousel = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.imageData.length;

  const onRightClick = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const onLeftClick = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const imgElement = document.querySelector(".slider-image");
    const colorThief = new ColorThief();
    let color;

    // Setting the text color when image is loaded in the DOM
    imgElement.addEventListener("load", function () {
      color = colorThief.getColor(imgElement);
      console.log(color);
      const avg = (color[0] + color[1] + color[2]) / 3; // Based on avg RGB value setting the Text color.
      if (avg < 100) {
        document.querySelector(".paraClass").style.color = "white";
      } else {
        document.querySelector(".paraClass").style.color = "black";
      }
    });
  });

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrowBtn" onClick={onLeftClick} />
      <FaArrowAltCircleRight
        className="right-arrowBtn"
        onClick={onRightClick}
      />
      <p className="paraClass">Text on top of Image</p>
      {props.imageData.map((items, index) => {
        return (
          <div
            key={index}
            className={index === current ? "active" : "notActive"}
          >
            {index === current && (
              <img src={items.image} className="slider-image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
