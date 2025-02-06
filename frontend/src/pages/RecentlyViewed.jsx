import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";

const RecentlyViewed = () => {
  const { products } = useContext(ShopContext);
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const recentlyViewedIds =
        JSON.parse(localStorage.getItem("recentlyViewed")) || [];
      const filteredProducts = products.filter((product) =>
        recentlyViewedIds.includes(product._id)
      );
      setRecentlyViewedProducts(filteredProducts);
      setLoading(false);
    }, 1000); // Simulating a delay for loading effect
  }, [products]);

  const clearRecentlyViewed = () => {
    localStorage.removeItem("recentlyViewed");
    setRecentlyViewedProducts([]);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="text-center py-8 text-3xl">
        <Title text1={"RECENTLY VIEWED"} text2={"PRODUCTS"} />
      </div>
      {recentlyViewedProducts.length > 0 && (
        <div className="flex justify-center mb-6">
          <button
            onClick={clearRecentlyViewed}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Clear All
          </button>
        </div>
      )}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-full h-60 bg-gray-300 animate-pulse rounded-lg"
            ></div>
          ))}
        </div>
      ) : recentlyViewedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recentlyViewedProducts.map((product) => (
            <ProductItem
              key={product._id}
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-lg text-center">
          No recently viewed products found.
        </p>
      )}
    </div>
  );
};

export default RecentlyViewed;
