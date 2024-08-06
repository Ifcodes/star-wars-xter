import "./App.css";
import TopNav from "./components/molecules/top-nav";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "wrapper-dark" : "wrapper-light"}>
      <TopNav />
    </section>
  );
}

export default App;
