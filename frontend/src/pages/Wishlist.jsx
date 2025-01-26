import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(ShopContext);

  return (
    <>
      <Helmet>
        <title>Wishlist - AdaaJaipur</title>
        <meta name="description" content="Wishlist - AdaaJaipur" />
      </Helmet>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
          <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item) => (
                <div
                  className="group  max-w-xs mx-auto flex flex-col h-full"
                  key={item._id}
                >
                  <Link to={`/product/${item._id}`} className="block flex-grow">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-[#F0F0F0]">
                      <img
                        src={item.image[0]}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h2 className="mt-2 text-base font-medium">{item.name}</h2>
                    <div className=" flex items-center gap-1 mt-1">
                      <img src={assets.star_icon} alt="" className="w-3 5" />
                      <img src={assets.star_icon} alt="" className="w-3 5" />
                      <img src={assets.star_icon} alt="" className="w-3 5" />
                      <img src={assets.star_icon} alt="" className="w-3 5" />
                      <img
                        src={assets.star_dull_icon}
                        alt=""
                        className="w-3 5"
                      />
                      <p className="pl-2">(122)</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹ {item.price}</h2>
                  </Link>
                  <div className="mt-4 flex-shrink-0">
                    <button
                      onClick={() => removeFromWishlist(item._id)}
                      className="w-full py-2 text-center text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Remove from Wishlist
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Your wishlist is empty!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
