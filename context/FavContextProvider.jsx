import React from 'react'
import { useState } from 'react';
import { createContext, useContext } from 'react'

const FavContext = createContext();


export default function FavContextProvider({children}) {
    const [favourites, setFavourites] = useState([])

  return (
    <FavContext.Provider value={{favourites, setFavourites}}>
        {children}
    </FavContext.Provider>
  )
}

export const useFavContext = () => {
  const context = useContext(FavContext);
  return context;
}