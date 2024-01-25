import React, { useEffect, useState } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "src/firebase/firebase.config";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "src/redux/features/authSlice";

import { ShowOnLogin, ShowOnLogout } from "../HiddenLink";
import { Nav } from "./Nav";

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
        if (user.displayName === null) {
          const u1 = user.email.split("@")[0];
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          // console.log(uName);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userId: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  return (
    <header className="bg-slate-700 text-white">
      <div className="customContainer header">
        <Link>
          <span>TH</span>shop
        </Link>
        <div className="gap-5 hidden sm:flex">
          <Nav />
          <div className="flex gap-2">
            <ShowOnLogout>
              <Link to="/login">Login</Link>
              <Link to="/registration">Register</Link>
            </ShowOnLogout>
            <ShowOnLogin>
              <a href="#home">Hi, {displayName}</a>
              <Link to="/order-history">My orders</Link>
              <Link to="/" onClick={logoutUser}>
                Logout
              </Link>
              <Link to="/cart" className="flex items-center gap-2">
                Cart <FaCartShopping />
                <p>0</p>
              </Link>
            </ShowOnLogin>
          </div>
        </div>
        {/* <button
          className="sm:hidden"
          onClick={() => {
            // dispatch(setIsShowMobileMenu(true));
          }}
        >
          <IoIosMenu />
        </button> */}
        {/* <MobileMenu /> */}
      </div>
    </header>
  );
};
