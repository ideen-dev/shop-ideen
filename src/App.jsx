import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Blog from "./pages/Blog";
import Product from "./pages/Product";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <main className="overlow-hidden text-tertiary">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </main>
  );
};

export default App;
