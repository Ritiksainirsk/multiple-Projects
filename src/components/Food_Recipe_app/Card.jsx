import React from "react";

export default function Card({ item }) {
  return (
    <div className="p-5 w-[250px] h-[310px] rounded-lg flex flex-col gap-2 shadow-2xl cursor-pointer hover:scale-105 transition-all">
      <img className="h-[170px] w-[100%] rounded-lg" src={item.image_url} alt={item.title} />
      <span className="text-sky-700 font-semibold text-[14px]">{item.publisher}</span>
      <p className=" font-bold text-gray-400">{item.title}</p>
    </div>
  );
}
