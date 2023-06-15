import React, { createContext, useContext, useState } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Create the theme provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provide the theme value and toggleTheme function to the context
  const themeContextValue = { theme, toggleTheme };

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};

// Custom hook to access the theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
