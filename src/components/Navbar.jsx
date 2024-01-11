import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ category, setCategory }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row">
        <h1
          className=" cursor-pointer text-4xl mb-4"
          onClick={() => {
            setCategory("allProducts");
          }}
        >
          Products
        </h1>
        <div className="flex flex-row ml-auto gap-3">
          <h2
            className=" cursor-pointer mb-4"
            onClick={() => {
              navigate("/");
            }}
          >
            Products
          </h2>
          <h2
            className=" cursor-pointer mb-4"
            onClick={() => {
              navigate("/favourites");
            }}
          >
            Favourites
          </h2>
        </div>
      </div>
    </>
  );
}
