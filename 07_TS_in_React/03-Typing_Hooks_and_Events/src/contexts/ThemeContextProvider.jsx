/* eslint-disable react-refresh/only-export-components */
import { createContext, use, useState } from 'react';

const allowedTheme = ['halloween', 'cyberpunk', 'dim', 'abyss', 'retro'];

export const ThemeContext = createContext('halloween');

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('halloween');

  function changeTheme(newTheme) {
    if (allowedTheme.includes(newTheme)) {
      setTheme(newTheme);
    }
  }

  return <ThemeContext value={{ theme, changeTheme }}>{children}</ThemeContext>;
  // return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return use(ThemeContext);
}
