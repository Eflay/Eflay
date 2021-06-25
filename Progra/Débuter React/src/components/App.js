import React from "react";
import Header from "./Header";
import logo from "../assets/logo.png";
import Card from "./Card";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../styles/layout.css";
import { useState, useEffect } from "react";

const App = () => {
  const savedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Header>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Header>
      <div className="lmj-layout-inner">
        <Card cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
