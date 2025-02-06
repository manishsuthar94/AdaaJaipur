import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Timer = () => {
  // Offer valid until 28th April 2025
  const saleEndTime = new Date("2025-02-10T23:59:59").getTime();

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = saleEndTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white text-gray-900 py-12 px-4 sm:px-6 gap-8">
      {/* Product Image */}
      <div className="w-[21rem] h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg"
          alt="Discounted Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Timer & Offer Details */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-3">
          🛍️ Flat 30% Off on Latest Fashion! 🛍️
        </h2>
        <p className="text-lg md:text-2xl text-[#666666] mb-8">
          Hurry! This <strong className="text-[#333333]">Exclusive Deal</strong>{" "}
          Ends Soon ⏳
        </p>

        {/* Timer */}
        <div className="grid grid-cols-4 gap-4 md:gap-6 w-full max-w-sm md:max-w-[44rem]">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
            const values = [
              timeRemaining.days,
              timeRemaining.hours,
              timeRemaining.minutes,
              timeRemaining.seconds,
            ];
            return (
              <div
                key={index}
                className="bg-[#F5F5F5] p-4 md:p-6 rounded-xl shadow-lg text-center w-full transition-transform transform hover:scale-105"
              >
                <span className="text-3xl md:text-5xl font-bold text-[#333333]">
                  {values[index]}
                </span>
                <p className="text-xs md:text-lg text-[#666666] mt-2">
                  {label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Shop Now Button */}
        <Link
          to={"/collection"}
          onClick={() => scrollTo(0, 0)}
          className="mt-6 w-[200px] inline-block sm:w-[218px] bg-slate-50 px-[54px] py-4 border-2 rounded-md hover:bg-slate-200 hover:text-black text-black transition-all font-medium text-sm sm:text-base border-black/10"
        >
          Shop Now →
        </Link>
      </div>
    </div>
  );
};

export default Timer;
