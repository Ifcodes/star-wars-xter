import { useContext } from "react";
import { ThemeContext } from "../context/Theme-context";

export const useTheme = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return { theme, handleTheme };
};
