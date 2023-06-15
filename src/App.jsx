import React from 'react';
import { ThemeProvider, useTheme } from './SwitchMode/ThemeContext';

const App = () => {
  // Use the useTheme hook to access the theme and toggleTheme function
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider>
      <div className={`App ${theme}`}>
      
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeProvider>
  );
};

export default App;