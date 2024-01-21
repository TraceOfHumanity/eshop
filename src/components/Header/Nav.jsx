import React from "react";

import { Link } from "react-router-dom";
import { routes } from "src/utils/data";

export const Nav = () => {
  return (
    <nav className="flex gap-2">
      {routes.map((route, index) => (
        <Link key={index} to={route.path}>
          {route.name}
        </Link>
      ))}
    </nav>
  );
};
