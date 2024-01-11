import React, { useCallback } from "react";
import { useFavContext } from "../../context/FavContextProvider";
import { useNavigate } from "react-router-dom";

export default function ProductBox({ item }) {
  const { favourites, setFavourites } = useFavContext();
  const navigate = useNavigate();

  const handleHeartClick = useCallback((fav) => {
    if (favourites.includes(fav)) {
      const updated = favourites.filter((Id) => Id !== fav);
      setFavourites(updated);
      return;
    }
    setFavourites([...favourites, fav]);
  });

  const linkTo = `/product/${item.id}`;
  return (
    <div key={item.id}>
      <img
        src={
          favourites.includes(item.id)
            ? "../../assets/heart-solid.svg"
            : "../../assets/heart-regular.svg"
        }
        className="h-6 ml-auto cursor-pointer"
        onClick={() => {
          handleHeartClick(item.id);
        }}
      />
      <img
        src={item.image}
        onClick={() => navigate(linkTo)}
        className="cursor-pointer"
      />
      <p>{item.title}</p>
    </div>
  );
}
