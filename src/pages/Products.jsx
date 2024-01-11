import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useFavContext } from "../../context/FavContextProvider";

export default function Products() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const { favourites, setFavourites } = useFavContext();

  const handleHeartClick = useCallback((fav) => {
    if (favourites.includes(fav)) {
      const updated = favourites.filter((Id) => Id !== fav);
      setFavourites(updated);
      return;
    }
    setFavourites([...favourites, fav]);
  });

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchFunc();
  }, []);
  return (
    <div className="">
      <img
        src={
          favourites.includes(Number(id))
            ? "../../assets/heart-solid.svg"
            : "../../assets/heart-regular.svg"
        }
        className="h-6 ml-auto cursor-pointer"
        onClick={() => {
          handleHeartClick(Number(id));
        }}
      />
      <p className=" text-2xl font-bold">{product.title}</p>

      <div className="flex flex-row items-center">
        <p>{product.description}</p>
        <img src={product.image} alt="" />
      </div>
    </div>
  );
}
