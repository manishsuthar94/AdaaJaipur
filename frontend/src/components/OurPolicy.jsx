import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className=" font-semibold">Easy Exchange</p>
        <p className=" text-gray-400">Valid Upto 15 Days</p>
      </div>
      <div>
        <img
          src="https://adaajaipur.com/cdn/shop/files/A4.webp?v=1707905435&width=3200"
          className="w-12 m-auto mb-5"
          alt=""
        />
        <p className=" font-semibold">Made in INDIA</p>
        <p className=" text-gray-400">Swadeshi</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className=" font-semibold">Customer Support</p>
        <p className=" text-gray-400">Available 24*7</p>
      </div>
      <div>
        <img
          src="https://img.icons8.com/?size=100&id=487&format=png&color=000000"
          className="w-12 m-auto mb-5"
          alt=""
        />
        <p className=" font-semibold">Fast Delivery</p>
        <p className=" text-gray-400">On Time Delivery</p>
      </div>
      <div>
        <img
          src="https://img.icons8.com/?size=100&id=74519&format=png&color=000000"
          className="w-12 m-auto mb-5"
          alt=""
        />
        <p className=" font-semibold">Secure Payment</p>
        <p className=" text-gray-400">100% Safe & Secure Payment</p>
      </div>
    </div>
  );
};

export default OurPolicy;
