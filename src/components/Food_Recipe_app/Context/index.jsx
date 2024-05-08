import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobleContextProvder = createContext();

export default function GlobleContext({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [panding, setPending] = useState(false);
  const [data, setData] = useState([]);
  const [detailRecipeItem, setDetailRecipeItem] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const navigate = useNavigate()

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      setPending(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchValue}`
      );
      const data = await res.json();

      setData(data);
      setPending(false);

      navigate('/')

    } catch (error) {
      setPending(false);
      console.log(error);
    }
  };

  const handleFavorite = (getFavoriteData) => {
    let cpyFavData = [...favoriteList];

    const index = cpyFavData.findIndex(
      (item) => item.id === getFavoriteData.id
    );

    if (index === -1) {
      cpyFavData.push(getFavoriteData);
    } else {
      cpyFavData.splice(index);
    }

    setFavoriteList(cpyFavData);

    // console.log(favoriteList);
  };

  return (
    <GlobleContextProvder.Provider
      value={{
        searchValue,
        setSearchValue,
        handleSearch,
        data,
        panding,
        detailRecipeItem,
        setDetailRecipeItem,
        handleFavorite,
        favoriteList,
      }}
    >
      {children}
    </GlobleContextProvder.Provider>
  );
}
