import {
  ReactNode,
  createContext,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";

export type themeType = "dark" | "light";

interface IThemeContext {
  theme: themeType | null;
  handleTheme: (theme: themeType) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  handleTheme: () => {},
});

// check if theme already exists on local storage
// if exists, set as current theme;
// if not, set to default theme;

export const ThemeProvider = memo(({ children }: { children: ReactNode }) => {
  const defaultTheme: themeType = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";

  const storedSelectedTheme: themeType = localStorage.getItem(
    "theme"
  ) as themeType;

  const currentTheme: themeType = storedSelectedTheme || defaultTheme;

  const [theme, setTheme] = useState<themeType | null>(currentTheme);

  const handleTheme = useCallback((newTheme: themeType) => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }, []);

  useEffect(() => {
    handleTheme(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
});
