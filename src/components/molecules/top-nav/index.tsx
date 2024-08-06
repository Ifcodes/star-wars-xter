import Logo from "../../atoms/logo";
import ThemeSwitch from "../../atoms/theme-switch";
import "./top-nav.scss";

const TopNav = () => {
  return (
    <nav>
      <div className="nav-content">
        <Logo />
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default TopNav;
