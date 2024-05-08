import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/Slices/CartSlice";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setLoading(false);

      setData(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetData();
  }, []);

  if (loading) {
    return (
      <>
        <div className="text-center mt-[200px] flex items-center gap-1 justify-center">
          <p className="font-bold">Loading</p>
          <span className="loading loading-bars loading-xs mt-1"></span>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center my-6">
      {data.map((item, index) => {
        return (
          <>
            <div>
              <Card key={index} params={item} />
            </div>
          </>
        );
      })}
    </div>
  );
}

function Card({ params }) {
  const dispatch = useDispatch();

  const handleAddCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <div className="card bg-base-100 shadow-xl h-[370px] w-[360px] cursor-pointer">
        <img
          src={params.image}
          alt="Shoes"
          className="h-[150px] w-[100%] object-contain"
        />
        <div className="card-body">
          <h2 className="card-title">{params.title}</h2>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => handleAddCart(params)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
