import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowMobileMenu } from "src/redux/features/popupsSlice";

export const MobileMenu = () => {
  const dispatch = useDispatch();
  const { isShowMobileMenu } = useSelector((state) => state.popups);

  const mobileMenuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      dispatch(setIsShowMobileMenu(false));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`absolute top-0 right-0 bg-rose-500 p-2  ${
        isShowMobileMenu ? "block" : "hidden"
      }`}
      ref={mobileMenuRef}
    >
      MobileMenu
    </div>
  );
};
