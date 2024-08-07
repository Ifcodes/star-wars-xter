import { useTheme } from "../../../hooks/useTheme";
import SunIcon from "../../../assets/vectors/SunIcon";
import MoonIcon from "../../../assets/vectors/MoonIcon";
// import "./theme-switch-styles.scss";
import Button from "../button";

const ThemeSwitch = () => {
  const { theme, handleTheme } = useTheme();

  const handleToggleTheme = () => {
    handleTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={handleToggleTheme}
      data-testid="theme-toggle-button"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
    </Button>
  );
};

export default ThemeSwitch;
