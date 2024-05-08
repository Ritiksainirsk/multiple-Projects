import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./LoadingProducts.css";

export default function LoadingProducts() {
  const [loading, setLoading] = useState(0);
  const [products, setProduct] = useState([]); 
  const [count, setCount] = useState(0);
  const [disableButton,setDisableButton] = useState(false)

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();

      if (data && data.products && data.products.length) {
        setProduct((prev)=> [...prev,...data.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [count]);

  useEffect(()=>{
    if(products && products.length === 100) setDisableButton(true)
  },[products])

  return (
    <div className="main-container">
      <div className="product-container">
        {products && products.length
          ? products.map((pro, index) => {
              return (
                <div className="box">
                  <img src={pro.thumbnail} alt="" key={pro.id} />
                  <h5>{pro.title}</h5>
                  <p>${pro.price}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="load-product">
        <button disabled={disableButton} onClick={()=> setCount(count + 1)}>Load More Product</button>
        <p>{disableButton ? "Product have reached 100" : null}</p>
      </div>

    </div>
  );
}
