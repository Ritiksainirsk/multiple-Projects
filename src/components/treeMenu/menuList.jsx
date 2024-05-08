import React from "react";
import MenuItem from "./menuItem";

export default function MenuList({ List = [] }) {
  
  return (
    <ul>
      {List && List.length
        ? List.map((data,index) => {
            return (
              <>
                <MenuItem menuItem={data} key={index} />
              </>
            );
          })
        : null}
    </ul>
  );
}
