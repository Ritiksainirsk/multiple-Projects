import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobleContextProvder } from "../Context";

export default function Navbar() {
  const { searchValue, setSearchValue,handleSearch} = useContext(GlobleContextProvder);

  return (
    <div className="px-12 py-2 bg-green-400">
      <div className="navbar flex rounded-lg bg-green-400 justify-between items-center">
        <div className="">
          <a className="btn btn-ghost text-xl">Food Recipe</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <form action="" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-1 rounded-lg border-[2px] w-80"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
            </form>
          </div>
        </div>
        <ul className="text-black flex gap-16">
          <li>
            <NavLink className="text-black bg-green-400" to={"/"}>
              Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink className="text-black bg-green-400" to={"/favorite"}>
              {" "}
              Favorite
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
