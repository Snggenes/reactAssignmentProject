import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import FavContextProvider from "../context/FavContextProvider.jsx";
import Favourites from "./pages/Favourites.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [category, setCategory] = useState("allProducts");

  return (
    <FavContextProvider>
      <Navbar category={category} setCategory={setCategory}/>
      <Routes>
        <Route
          path="/"
          element={<Home category={category} setCategory={setCategory} />}
        />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/favourites" element={<Favourites />}/>
      </Routes>
    </FavContextProvider>
  );
}

export default App;
