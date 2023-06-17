import React from "react";
import "./style.css";
import Header from "./Components/Header";
import All_Products from "./Components/All_Products";
import Selected_Products from "./Components/Selected_Products";
import {BrowserRouter,Routes,Route} from "react-router-dom"

;
export default function App() {
  return (
    <div>

      <Header />

     <BrowserRouter>
     
     <Routes>

     <Route path="/"   element={ <All_Products /> }/>
     <Route path="/product/:productId"  element={ <Selected_Products />} />
     <Route>Page not Found</Route>

     </Routes>
     
     </BrowserRouter>
     
    </div>
  );
}
