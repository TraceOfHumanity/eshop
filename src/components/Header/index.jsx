import React, { useEffect, useState } from "react";

import { FaCartShopping } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import { Nav } from "./Nav";
import { MobileMenu } from "./MobileMenu";
import { useDispatch } from "react-redux";
import { setIsShowMobileMenu } from "src/redux/features/popupsSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "src/firebase/firebase.config";
import { toast } from "react-toastify";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout success");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user.displayName)
        setDisplayName(user.displayName)
      } else {
        setDisplayName("")
      }
    });
  }, []);

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
            <a href="#">
              Hi, {displayName}
            </a>
            <Link to="/registration">Register</Link>
            <Link to="/order-history">My orders</Link>
            <Link to="/" onClick={logoutUser}>
              Logout
            </Link>
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
