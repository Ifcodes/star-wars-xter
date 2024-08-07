import Logo from "../../atoms/logo";
import ThemeSwitch from "../../atoms/theme-switch";
import "./top-nav.scss";

const TopNav = () => {
  return (
    <header className="top-nav-header">
      <nav className="nav-content">
        <Logo />
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default TopNav;
