import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';
import Navbar from './Components/Navbar';
import ProductItem from './Components/ProductItem';
import NotFound from './Components/NotFound';
// import Footer from './Components/Footer';
import Basket from './Components/Basket';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<ProductItem />} />
          </Route>
          <Route path="cart" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
