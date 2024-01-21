import React from "react";

import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Admin } from "./pages/Admin";
import { Cart } from "./pages/Cart";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { OrderHistory } from "./pages/OrderHistory";

function App() {
  return (
    <div className="min-h-screen ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
