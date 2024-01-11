import React, { useEffect, useState } from "react";
import ProductBox from "../components/ProductBox";
import { useFetch } from "../hooks/useFetch";

export default function Home({ category, setCategory }) {
  const { data: categories, error: categoriesError } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  const { data: singleCatProducts, eroor: singleCatProductsError } = useFetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  const { data: products, error: productsError } = useFetch("https://fakestoreapi.com/products");

  const categoriesMap = categories ? (
    categories.map((item) => {
      return (
        <li
          className=" cursor-pointer"
          onClick={() => {
            setCategory(item);
          }}
          key={item}
        >
          {item}
        </li>
      );
    })
  ) : (
    <p>{categoriesError}</p>
  );

  const productsMap =
    category === "allProducts" ? (
      products ? (
        products.map((item) => {
          return <ProductBox key={item.id} item={item} />;
        })
      ) : (
        <p>{productsError}</p>
      )
    ) : singleCatProducts ? (
      singleCatProducts.map((item) => {
        return <ProductBox key={item.id} item={item} />;
      })
    ) : (
      <p>{singleCatProductsError}</p>
    );

  return (
    <>
      <ul className=" flex gap-4 text-xl">{categoriesMap}</ul>
      <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {productsMap}
      </div>
    </>
  );
}
