import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.icon} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Adaa, with its in-house exclusive feminine brand, has earned a
            strong reputation in the fashion industry. With an impressive range
            of collections, including Kurtis, Palazzos, Gowns, Shararas, and
            more, Adaa caters to the diverse fashion needs of its customers.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to={"/"} onClick={() => scrollTo(0, 0)}>
              Home
            </Link>
            <Link to={"/collection"} onClick={() => scrollTo(0, 0)}>
              Collection
            </Link>
            <Link to="/collection?category=Men" onClick={() => scrollTo(0, 0)}>
              Men
            </Link>
            <Link
              to="/collection?category=Women"
              onClick={() => scrollTo(0, 0)}
            >
              Women
            </Link>
            <Link to="/collection?category=Kids" onClick={() => scrollTo(0, 0)}>
              Kids
            </Link>
            <Link to="/recently-viewed" onClick={() => scrollTo(0, 0)}>
              Recently Viewed
            </Link>
            <Link to={"/about"} onClick={() => scrollTo(0, 0)}>
              About Us
            </Link>
            <Link to={"/contact"} onClick={() => scrollTo(0, 0)}>
              Contact Us
            </Link>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 98281 70003</li>
            <li> adaajaipur4india@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="pt-5 pb-2 text-sm text-center">
          Copyright 2024@ AdaaJaipur - All Right Reserved.
        </p>
        <p className="pb-5 pt-3 text-sm text-center">
          <Link
            to={"/terms-of-service"}
            onClick={() => scrollTo(0, 0)}
            className="text-blue-600"
          >
            Terms of Service
          </Link>{" "}
          <span className="mr-2 ml-2">|</span>
          <Link
            to={"/privacy-policy"}
            onClick={() => scrollTo(0, 0)}
            className="text-blue-600"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
