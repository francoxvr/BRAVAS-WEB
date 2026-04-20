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

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }
  }, [darkMode, mounted]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  if (!mounted) return null;

  return (
  <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>

      {children}
    </div>
  </ThemeContext.Provider>
);
};