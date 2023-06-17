import React from "react";
import "./style.css";
import Header from "./Components/Header";
import All_Products from "./Components/All_Products";
import Selected_Products from "./Components/Selected_Products";


export default function App() {
  return (
    <div>

      <Header />
      <All_Products />
      <Selected_Products />
      
      <h1>Hey , I am an App </h1>

    </div>
  );
}
