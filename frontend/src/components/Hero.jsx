import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    assets.hero_img, // Image 1
    assets.hero_img1, // Image 2
    assets.hero_img2, // Image 3
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slider functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row border-[1.4px] border-gray-400 mt-4 ">
        {/* Hero Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0 px-8 bg-gradient-to-r from-[#fafafa] to-[#ffffff]">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">
                OUR BESTSELLERS
              </p>
            </div>
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">
                <Link
                  to={"/collection"}
                  className="transition duration-300 ease-in-out hover:underline"
                >
                  SHOP NOW
                </Link>
              </p>
              <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
          </div>
        </div>

        {/* Hero Right Side Slider */}
        <div className="w-full sm:w-1/2 relative overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px] max-h-[500px]">
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <img
                key={index}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                src={slide}
                alt={`Slide ${index + 1}`}
              />
            ))}
          </div>
          {/* Navigation Buttons */}
          <button
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-slate-700 p-1 sm:p-2 rounded-full opacity-50 hover:opacity-100"
            onClick={prevSlide}
          >
            &#8592;
          </button>
          <button
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-slate-700 p-1 sm:p-2 rounded-full opacity-50 hover:opacity-100"
            onClick={nextSlide}
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
