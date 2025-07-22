import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
export function useTheme() {
const Context = useContext(ThemeContext);
 if (!Context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return Context;      
}