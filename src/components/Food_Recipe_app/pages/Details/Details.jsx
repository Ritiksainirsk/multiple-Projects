import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobleContextProvder } from "../../Context";

export default function Details() {
  const { detailRecipeItem, setDetailRecipeItem,handleFavorite,favoriteList } =
    useContext(GlobleContextProvder);

  const { id } = useParams();

  useEffect(() => {
    const getDetailsData = async () => {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );

      const data = await res.json();

      if (data?.data) setDetailRecipeItem(data);
    };

    getDetailsData();
  }, []);


  return (
    <div className="container mx-auto py-10 px-3 grid grid-cols-2 gap-10">
      <div className="row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={detailRecipeItem?.data?.recipe?.image_url}
            alt=""
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sky-700 font-semibold text-[14px]">
          {detailRecipeItem?.data?.recipe?.publisher}
        </span>
        <p className=" font-bold text-gray-400">
          {detailRecipeItem?.data?.recipe?.title}
        </p>
        <div>
          <button className="btn btn-active btn-neutral uppercase text-white" onClick={()=>{handleFavorite(detailRecipeItem?.data?.recipe)}}>{favoriteList.findIndex(item => item.id === detailRecipeItem?.data?.recipe?.id) === -1 ? "Add to favorite" :"Remove from favorite "}</button>
        </div>

        <div>
          <p className="text-2xl font-semibold my-2">Ingredients:</p>
          <ul className="flex flex-col gap-3">
            { detailRecipeItem.data !== undefined &&
              detailRecipeItem.data.recipe.ingredients.map((Ingredients,index)=>{
                return(
                  <li className="text-black" key={index}>
                    <span>{Ingredients.quantity} {Ingredients.unit}</span>
                    <span>{Ingredients.description}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="flex items-center pb-9">
        <h4>Here is full Recipe Check it out : </h4>
        <a target="_blank" href={detailRecipeItem?.data?.recipe?.source_url}><button className="btn btn-link">Click Here</button></a>
      </div>

    </div>
  );
}
