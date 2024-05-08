import React from "react";
import './style.css'
import useLocalStorage from "./useLocalStorage";

export default function ThemeChanger() {

    const [theme,setTheme] = useLocalStorage("theme","light")

    function handleToggleTheme() {
        setTheme(theme === "light" ? "dark" :"light")        
    }

  return (
    <div>
      <div className="light-dark-theme" data-theme={theme}>
        <p>Click to change the theme</p>
        <button onClick={()=>handleToggleTheme()}>Click to Change</button>
      </div>
    </div>
  );
}
