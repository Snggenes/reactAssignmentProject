import React from "react";
import { useFavContext } from "../../context/FavContextProvider";
import ProductBox from "../components/ProductBox";
import { useFetch } from "../hooks/useFetch.js";

export default function Favourites() {
  const { favourites } = useFavContext();

  const { data: products } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const favProducts = products ? products.filter((item) => favourites.includes(item.id)) : [];

  const productsMap = favProducts.map((item) => {
    return <ProductBox key={item.id} item={item} />;
  });

  return (
    <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
      {favProducts.length !== 0 ? productsMap : <p>None yet!</p>}
    </div>
  );
}
