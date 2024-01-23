import React from "react";
import ReactDOM from "react-dom";

export const Loader = () => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      loading...
    </div>,
    document.getElementById("loader")
  );
};
