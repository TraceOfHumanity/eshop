import React from "react";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="customContainer">
        <div className="">
          <Link>
            <span>TH</span>shop
          </Link>
        </div>
      </div>
    </header>
  );
};
