import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { useLocation } from "react-router-dom"; // To get query params
import { Helmet } from "react-helmet";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const location = useLocation(); // To get the current URL
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category"); // Get category from URL

  useEffect(() => {
    if (initialCategory) {
      setCategory([initialCategory]); // Set category from query param
    }
  }, [initialCategory]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  // Calculate total pages
  const totalPages = Math.ceil(filterProducts.length / itemsPerPage);

  // Get products for the current page
  const currentProducts = filterProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Pagination Handlers
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Helmet>
        <title>Collection - AdaaJaipur</title>
        <meta name="description" content="Collection - AdaaJaipur" />
      </Helmet>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter Options */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl font-medium flex items-center cursor-pointer gap-2 mb-5"
          >
            FILTERS
            <img
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              alt=""
            />
          </p>
          {/* Category Filter */}
          <div
            className={`border border-gray-300 rounded-[1rem] pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-base font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <div className="inline-flex items-center">
                <label
                  className="cyberpunk-checkbox-label text-slate-600 text-[16px] p-2"
                  htmlFor="men-checkbox"
                >
                  <input
                    type="checkbox"
                    className="cyberpunk-checkbox"
                    value="Men"
                    onChange={toggleCategory}
                    checked={category.includes("Men")}
                    id="men-checkbox"
                  />
                  Men
                </label>
              </div>

              <div className="inline-flex items-center">
                <label
                  className="cyberpunk-checkbox-label text-slate-600 text-[16px] p-2"
                  htmlFor="women-checkbox"
                >
                  <input
                    type="checkbox"
                    className="cyberpunk-checkbox"
                    value="Women"
                    onChange={toggleCategory}
                    checked={category.includes("Women")}
                    id="women-checkbox"
                  />
                  Women
                </label>
              </div>

              <div className="inline-flex items-center">
                <label
                  className="cyberpunk-checkbox-label text-slate-600 text-[16px] p-2"
                  htmlFor="kids-checkbox"
                >
                  <input
                    type="checkbox"
                    className="cyberpunk-checkbox"
                    value="Kids"
                    onChange={toggleCategory}
                    checked={category.includes("Kids")}
                    id="kids-checkbox"
                  />
                  Kids
                </label>
              </div>
            </div>
          </div>
          {/* SubCategory Filter */}
          <div
            className={`border border-gray-300 rounded-[1rem] pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-base font-medium">TYPE</p>

            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {[
                "Kurta Sets",
                "Topwear",
                "Sarees",
                "Bottomwear",
                "Gowns",
                "Palazzos",
                "Winterwear",
                "Kurtas",
              ].map((item, index) => (
                <div key={index} className="inline-flex items-center">
                  <label
                    className="cyberpunk-checkbox-label text-slate-600 text-[16px] p-2"
                    htmlFor={`subCategory-${index}`}
                  >
                    <input
                      type="checkbox"
                      className="cyberpunk-checkbox"
                      value={item}
                      onChange={toggleSubCategory}
                      id={`subCategory-${index}`}
                    />
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            {/* Product Sort */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 rounded-[0.7rem] text-sm px-2 cursor-pointer"
            >
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Map Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {currentProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={() => handlePrevious(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-sm font-medium rounded transition ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-slate-800 text-white hover:bg-slate-500"
              }`}
            >
              Previous
            </button>

            <p className="text-lg font-medium">
              Page{" "}
              <span className="text-teal-600 mr-1 ml-1">{currentPage}</span> of{" "}
              <span className="text-teal-600 mr-1 ml-1">{totalPages}</span>
            </p>

            <button
              onClick={() => handleNext(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-sm font-medium rounded transition ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-slate-800 text-white hover:bg-slate-500"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
