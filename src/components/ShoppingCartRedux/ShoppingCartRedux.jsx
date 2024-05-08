import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";

export default function ShoppingCartRedux() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
      </Routes>
    </div>
  );
}

function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <>
      <div className="navbar px-16 bg-red-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">ShopNow</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-black">
            <Link to={"/"}>
              <li>
                <a> Home </a>
              </li>
            </Link>
            <Link to={"/cart"}>
              <li>
                <a>
                  Cart{" "}
                  <p
                    className={`${
                      cart.length > 0
                        ? "bg-red-500 font-bold px-[6px] rounded-full text-[7px] text-white absolute top-0 right-[-3px]"
                        : ""
                    }`}
                  >
                    {cart.length > 0 ? cart.length : ""}
                  </p>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
