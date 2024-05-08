import React, { useEffect, useState } from "react";
import MenuList from "./menuList";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function MenuItem({ menuItem = [] }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const HandelToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  };

  return (
    <li>
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <p>{menuItem.label}</p>
        {menuItem.childern ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => HandelToggleChildren(menuItem.label)}
          >
           {displayCurrentChildren[menuItem.label] ? <FaMinus/> : <FaPlus />}  
          </span>
        ) : null}
      </div>
      {menuItem &&
      menuItem.childern &&
      displayCurrentChildren[menuItem.label] ? (
        <MenuList List={menuItem.childern} />
      ) : null}
    </li>
  );
}
