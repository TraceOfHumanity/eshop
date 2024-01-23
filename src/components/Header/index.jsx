import React, { useState } from "react";

import { FaCartShopping } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

import { Nav } from "./Nav";
import { MobileMenu } from "./MobileMenu";
import { useDispatch } from "react-redux";
import { setIsShowMobileMenu } from "src/redux/features/popupsSlice";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="bg-slate-700 text-white">
      <div className="customContainer header">
        <Link>
          <span>TH</span>shop
        </Link>
        <div className="gap-5 hidden sm:flex">
          <Nav />
          <div className="flex gap-2">
            <Link to="/login">Login</Link>
            <Link to="/registration">Register</Link>
            <Link to="/order-history">My orders</Link>
            <Link to="/cart" className="flex items-center gap-2">
              Cart <FaCartShopping />
              <p>0</p>
            </Link>
          </div>
        </div>
        <button
          className="sm:hidden"
          onClick={() => {
            dispatch(setIsShowMobileMenu(true));
          }}
        >
          <IoIosMenu />
        </button>
        <MobileMenu />
      </div>
    </header>
  );
};
