import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >
      <div className=" overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out rounded-lg"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3  text-black xl:text-lg">{name}</p>
      <div className=" flex items-center gap-1 mt-1">
        <img src={assets.star_icon} alt="" className="w-3 5" />
        <img src={assets.star_icon} alt="" className="w-3 5" />
        <img src={assets.star_icon} alt="" className="w-3 5" />
        <img src={assets.star_icon} alt="" className="w-3 5" />
        <img src={assets.star_dull_icon} alt="" className="w-3 5" />
        <p className="pl-2">(122)</p>
      </div>
      <p className=" font-semibold text-black text-xl xl:text-xl">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
