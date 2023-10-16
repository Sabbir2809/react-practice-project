import React, { useContext } from "react";

// step-1:
const Context = React.createContext(null);

// step-2:
export const Provider = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  const value = { themeMode, setThemeMode, darkTheme, lightTheme };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// step-3:
export const useCONTEXT = () => {
  return useContext(Context);
};
