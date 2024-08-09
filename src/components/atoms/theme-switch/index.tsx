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
      otherClasses="w-12 h-12 lg:w-[12rem]"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      <span className="hidden lg:flex">
        {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
      </span>
    </Button>
  );
};

export default ThemeSwitch;
