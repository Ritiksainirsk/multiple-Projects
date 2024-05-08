import React, { useContext } from "react";
import { GlobleContextProvder } from "../../Context";
import Card from "../../Card";
import { NavLink } from "react-router-dom";

export default function Favorite() {
  const { favoriteList } = useContext(GlobleContextProvder);

  return (
    <div
      className="flex gap-5 my-5 flex-wrap
    justify-center"
    >
      {favoriteList.map((item) => {
        return (
          <>
            <NavLink to={`/detail/${item.id}`}>
              <Card item={item} key={item.id} />
            </NavLink>
          </>
        );
      })}
    </div>
  );
}
