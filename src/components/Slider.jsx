import React, { useEffect, useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { sliderData } from "src/utils/data";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1
    );
  };

  const autoPlay = true;
  let timer = null;
  let delay = 8000;

  useEffect(() => {
    if (autoPlay) {
      timer = setInterval(() => {
        nextSlide();
      }, delay);
    }
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div>
      <FaArrowLeft
        size={30}
        className="absolute top-1/2 left-2 z-10 cursor-pointer bg-black p-1 rounded-full text-white "
        onClick={() => prevSlide()}
      />
      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={slide.image}
            className={index === currentSlide ? "block  " : "hidden"}
          >
            <img
              src={image}
              alt={slide.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-gradient-to-b from-black to-transparent p-3 rounded-md drop-shadow-md">
              <h2>{heading}</h2>
              <p>{desc}</p>
              <hr />
              <a href="#product">Shop Now</a>
            </div>
          </div>
        );
      })}
      <FaArrowRight
        size={30}
        className="absolute top-1/2 right-2 z-10 cursor-pointer bg-black p-1 rounded-full text-white "
        onClick={() => nextSlide()}
      />
    </div>
  );
};
