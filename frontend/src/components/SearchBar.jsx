import React, { useContext, useEffect, useState, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch, products } = useContext(ShopContext); // Assuming `products` is in the context
  const [visible, setVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(-1); // For arrow key navigation
  const location = useLocation();

  const searchRef = useRef(null); // Reference for detecting clicks outside

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  useEffect(() => {
    if (search.trim()) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [search, products]);

  // Detect click outside search bar to close suggestions
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSuggestions([]); // Hide suggestions when clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item) => {
    setSearch(item.name);
    setSuggestions([]); // Clear suggestions on select
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlightIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && highlightIndex >= 0) {
      handleSelect(suggestions[highlightIndex]); // Select and hide suggestions
    }
  };

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center relative" ref={searchRef}>
      <div
        className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2"
        onKeyDown={handleKeyDown}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search products..."
        />
        <img className="w-4" src={assets.search_icon} alt="Search Icon" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt="Close Icon"
      />
      {/* Scrollable Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-md shadow-lg max-w-xs w-full mt-2 z-10 max-h-48 overflow-y-auto">
          <ul>
            {suggestions.map((item, index) => (
              <li
                key={item.id}
                className={`px-4 py-2 cursor-pointer ${
                  index === highlightIndex ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
                onClick={() => handleSelect(item)} // Hide suggestions only
              >
                {/* Highlight search match */}
                {item.name.split(new RegExp(`(${search})`, "gi")).map((part, i) =>
                  part.toLowerCase() === search.toLowerCase() ? (
                    <span key={i} className="text-blue-500 font-semibold">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : null;
};

export default SearchBar;
