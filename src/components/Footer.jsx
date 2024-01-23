import React from "react";

export const Footer = () => {
  const data = new Date();
  const year = data.getFullYear();

  return (
    <div className="bg-slate-700 text-white">
      <div className="customContainer flex justify-center p-2">
        {year} &copy; THshop. All rights reserved.
      </div>
    </div>
  );
};
