import React from "react";
import { ReactDOM } from "react-dom";

export const Loader = () => {
  return ReactDOM.createPortal(
    <div>loading...</div>,
    document.getElementById("loader")
  );
};
