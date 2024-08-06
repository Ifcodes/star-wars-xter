import { useTheme } from "../../../hooks/useTheme";
import SunIcon from "../../../assets/vectors/SunIcon";
import MoonIcon from "../../../assets/vectors/MoonIcon";
import "./theme-switch-styles.scss";

const ThemeSwitch = () => {
  const { theme, handleTheme } = useTheme();

  const handleToggleTheme = () => {
    handleTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggleTheme}
      data-testid="theme-toggle-button"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      {theme === "dark" ? "Switch to light" : "Switch to dark"}
    </button>
  );
};

export default ThemeSwitch;
