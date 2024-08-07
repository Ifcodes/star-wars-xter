import "./App.css";
import TopNav from "./components/molecules/top-nav";
import CharactersList from "./components/organisms/characters-list";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <section className={theme === "dark" ? "wrapper-dark" : "wrapper-light"}>
      <TopNav />
      <main>
        <CharactersList />
      </main>
    </section>
  );
}

export default App;
