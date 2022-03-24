import React from "react";
import "./App.css";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Info from "./Info/Info";
import Product from "./Product/Product";

function App() {
  return (
    <div className="app">
      <Home />
      <Info />
      <Product />
      <Contact />
    </div>
  );
}

export default App;
