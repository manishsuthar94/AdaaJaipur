import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { FiShare2 } from "react-icons/fi"; // Import the share icon

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, addToWishlist } =
    useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [activeTab, setActiveTab] = useState("description"); // State to manage active tab

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: productData.name,
          text: `Check out this product: ${productData.name} - ${productData.description}`,
          url: window.location.href,
        });
        console.log("Product shared successfully");
      } catch (error) {
        console.error("Error sharing product:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  useEffect(() => {
    if (productData) {
      // Get the recently viewed products from localStorage
      const recentlyViewed =
        JSON.parse(localStorage.getItem("recentlyViewed")) || [];

      // Check if the product is already in the list
      if (!recentlyViewed.includes(productData._id)) {
        // Add the new product ID to the list
        recentlyViewed.unshift(productData._id);

        // Limit the list to the last 5 viewed products
        if (recentlyViewed.length > 4) {
          recentlyViewed.pop();
        }

        // Save the updated list back to localStorage
        localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
      }
    }
  }, [productData]);

  // Sample reviews data
  const sampleReviews = [
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      comment: "Great product! Very comfortable and fits perfectly.",
    },
    {
      id: 2,
      user: "Jane Smith",
      rating: 4,
      comment:
        "Good quality, but the color is slightly different from the picture.",
    },
    {
      id: 3,
      user: "Alice Johnson",
      rating: 3,
      comment: "It's okay, but the material could be better.",
    },
    {
      id: 4,
      user: "John Doe",
      rating: 2,
      comment: "Great product! Very comfortable and fits perfectly.",
    },
  ];

  return productData ? (
    <>
      <Helmet>
        <title>{productData.name} - AdaaJaipur</title>
        <meta
          name="description"
          content={`${productData.description} - AdaaJaipur`}
        />
      </Helmet>
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        {/*----------- Product Data-------------- */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/*---------- Product Images------------- */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt=""
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <img className="w-full h-auto" src={image} alt="" />
            </div>
          </div>

          {/* -------- Product Info ---------- */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className=" flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${
                      item === size ? "border-orange-500" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4">
              <button
                onClick={() => addToCart(productData._id, size)}
                className="bg-slate-800 text-white px-6 py-3 text-sm sm:text-base font-medium rounded-lg shadow-md hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <LuShoppingCart className="w-6 h-6" />
                <span>ADD TO CART</span>
              </button>

              <button
                onClick={() => addToWishlist(productData)}
                className="bg-[#866528] text-white px-6 py-3 text-sm sm:text-base font-medium rounded-lg shadow-md hover:bg-yellow-800 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <FaRegHeart className="w-6 h-6" />
                <span>ADD TO WISHLIST</span>
              </button>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="bg-blue-500 text-white px-6 py-3 text-sm sm:text-base font-medium rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <FiShare2 className="w-6 h-6" />
                <span>SHARE</span>
              </button>
            </div>

            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        {/* ---------- Description & Review Section ------------- */}
        <div className="mt-20">
          <div className="flex">
            <button
              onClick={() => setActiveTab("description")}
              className={`border px-5 py-3 text-sm ${
                activeTab === "description" ? "bg-gray-200" : ""
              }`}
            >
              <b>Description</b>
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`border px-5 py-3 text-sm ${
                activeTab === "reviews" ? "bg-gray-200" : ""
              }`}
            >
              <b>Reviews ({sampleReviews.length})</b>
            </button>
          </div>
          <div className="border px-6 py-6 text-sm text-gray-500">
            {activeTab === "description" ? (
              <div className="flex flex-col gap-4">
                <p>
                  An e-commerce website is an online platform that facilitates
                  the buying and selling of products or services over the
                  internet. It serves as a virtual marketplace where businesses
                  and individuals can showcase their products, interact with
                  customers, and conduct transactions without the need for a
                  physical presence. E-commerce websites have gained immense
                  popularity due to their convenience, accessibility, and the
                  global reach they offer.
                </p>
                <p>
                  E-commerce websites typically display products or services
                  along with detailed descriptions, images, prices, and any
                  available variations (e.g., sizes, colors). Each product
                  usually has its own dedicated page with relevant information.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {sampleReviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-base">
                        {review.user}
                      </span>
                      <div className="flex">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <img
                            key={i}
                            src={assets.star_icon}
                            alt="star"
                            className="w-4"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-base">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* --------- display related products ---------- */}

        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </>
  ) : (
    <div className="text-center py-20">
      <h2 className="text-2xl font-semibold text-red-600">Product not found</h2>
      <p className="text-gray-500 mt-2">
        The product you are looking for does not exist.
      </p>
    </div>
  );
};

export default Product;
