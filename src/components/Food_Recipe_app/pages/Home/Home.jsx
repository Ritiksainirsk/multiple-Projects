import React, { useContext } from "react";
import { GlobleContextProvder } from "../../Context";
import Card from "../../Card";
import { NavLink } from "react-router-dom";

export default function Home() {
  const { data, panding } = useContext(GlobleContextProvder);

  if (panding) {
    return (
      <div className="font-bold text-center mt-48">Data is Loading....</div>
    );
  }
  
  return (
    <div className="flex flex-wrap justify-center gap-5 my-10">
      {data.data !== undefined &&
        data.data.recipes.map((item, index) => {
          return (
            <div key={index} className="">
              <NavLink to={`/detail/${item.id}`}>
                <Card item={item} key={item.id} />
              </NavLink>
            </div>
          );
        })}
    </div>
  );
}
