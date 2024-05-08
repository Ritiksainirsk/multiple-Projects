import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../../store/Slices/CartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const total = cart.reduce((accum, items) => {
    return (accum += items.price);
  }, 0);

  const deleteItem = (itemId) => {
    dispatch(deleteFromCart(itemId));
  };

  return (
    <>
      {cart && cart.length > 0 ? (
        <div className="flex flex-wrap gap-5 m-7 justify-center">
          {cart &&
            cart.length > 0 &&
            cart.map((item) => {
              return (
                <>
                  <div className="w-[200px] p-4 rounded-lg border-[1px] border-black">
                    <div className="">
                      <img
                        src={item.image}
                        alt=""
                        className="w-[100%] h-[100px] object-contain"
                      />
                    </div>
                    <p>{item.title}</p>
                    <p
                      className="font-bold text-center cursor-pointer text-[13px] mt-2"
                      onClick={() => deleteItem(item.id)}
                    >
                      X
                    </p>
                  </div>
                </>
              );
            })}

          <div className=" font-bold">
            <h3> Total : ₹ {total}</h3>
            <h4>Items : {cart.length}</h4>
          </div>
        </div>
      ) : (
        <div className="font-bold text-center mt-52">
          <h2 className="mb-4 text-lg text-gray-400">Your Cart is Empty</h2>
          <button className="btn btn-neutral" onClick={()=> navigate("/")}>Countinue Shopping</button>
        </div>
      )}
    </>
  );
}
