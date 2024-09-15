import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "Light",
  lighttheme: () => {},
  darktheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function usetheme(){
    return useContext(ThemeContext);
}