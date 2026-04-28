import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return false;
  }

  const savedTheme = window.localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
