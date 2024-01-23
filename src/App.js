import React from "react";

import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Admin } from "./pages/Admin";
import { Cart } from "./pages/Cart";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { OrderHistory } from "./pages/OrderHistory";
import { Login } from "./pages/auth/Login";
import { Registration } from "./pages/auth/Registration";
import { Reset } from "./pages/auth/Reset";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-auto flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
