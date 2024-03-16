import React from "react";
import './index.css';
import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="app" >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/classic" element={<ShopCategory  category="classic"/>} />
        <Route path="/novels" element={<ShopCategory  category="novels"/>} />
        <Route path="/detektive" element={<ShopCategory  category="detektive"/>} />
        <Route path="/horror" element={<ShopCategory category="horror"/>} />
        <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path = "/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
