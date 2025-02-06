import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Profile from "../pages/Profile";
import { IoIosLogOut } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showBanner, setShowBanner] = useState(true); // Banner ke liye state

  const {
    setShowSearch,
    getCartCount,
    wishlistItems, // Accessing wishlistItems from ShopContext
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} // Start chhota aur transparent
            animate={{ opacity: 1, scale: 1 }} // Normal size aur visible
            exit={{ opacity: 0, scale: 0.5 }} // Chhota hote-hote fade-out
            transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transition
            className="flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50"
          >
            <div className="flex items-center mx-auto">
              <p className="text-sm font-normal text-gray-500">
                🎉 Sign up and get 20% off to your first order.{" "}
                <Link to={"/login"} className="text-slate-800 underline">
                  Sign up
                </Link>
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setShowBanner(false)}
                type="button"
                className="w-7 h-7 flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close banner</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between py-5 font-medium">
        <Link to="/">
          <img src={assets.icon} className="w-32" alt="" />
        </Link>

        <ul className="hidden lg:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.6px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.6px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collection?category=Men"
            className="flex flex-col items-center gap-1"
          >
            <p>MEN</p>
          </NavLink>
          <NavLink
            to="/collection?category=Women"
            className="flex flex-col items-center gap-1"
          >
            <p>WOMEN</p>
          </NavLink>
          <NavLink
            to="/collection?category=Kids"
            className="flex flex-col items-center gap-1"
          >
            <p>KIDS</p>
          </NavLink>
          <NavLink
            to="/recently-viewed"
            className="flex flex-col items-center gap-1"
          >
            <p>RECENTLY VIEWED</p>
            <hr className="w-2/4 border-none h-[1.6px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT US</p>
            <hr className="w-2/4 border-none h-[1.6px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT US</p>
            <hr className="w-2/4 border-none h-[1.6px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <img
            onClick={() => {
              setShowSearch(true);
              navigate("/collection");
            }}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt=""
          />

          <div className="group relative">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
            {/* Dropdown Menu */}
            {token && (
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-2 z-50">
                <div
                  class="z-50 my-4 text-base list-none bg-slate-100 divide-y divide-gray-100 rounded-lg shadow-sm "
                  id="user-dropdown"
                >
                  <div class="px-4 py-3">
                    <Profile />
                  </div>
                  <ul class="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        to={"/orders"}
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Orders
                      </Link>
                    </li>
                    <li>
                      <p
                        onClick={logout}
                        class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer "
                      >
                        Logout <IoIosLogOut className="ml-2 font-extrabold" />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Wishlist Icon with Count */}
          <Link to="/wishlist" className="relative">
            <img src={assets.heart} className="w-6 min-w-6" alt="" />
            {wishlistItems.length > 0 && (
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                {wishlistItems.length}
              </p>
            )}
          </Link>

          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer lg:hidden"
            alt=""
          />
        </div>

        {/* Sidebar menu for small screens */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                className="h-4 rotate-180"
                src={assets.dropdown_icon}
                alt=""
              />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collection"
            >
              COLLECTION
            </NavLink>

            <Link
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collection?category=Men"
            >
              MEN
            </Link>
            <Link
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collection?category=Women"
            >
              WOMEN
            </Link>
            <Link
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collection?category=Kids"
            >
              KIDS
            </Link>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/recently-viewed"
            >
              RECENTLY VIEWED
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/about"
            >
              ABOUT US
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/contact"
            >
              CONTACT US
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
