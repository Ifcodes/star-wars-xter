import { useTheme } from "../../../hooks/useTheme";
import LogoLight from "../../../assets/star-warz-logo-black.png";
import LogoDark from "../../../assets/star-wars-white.svg";
import "./logo-styles.scss";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <img
      role="logo"
      src={theme === "dark" ? LogoDark : LogoLight}
      alt="star wars logo"
    />
  );
};

export default Logo;
