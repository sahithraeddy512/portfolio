import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const initialState: ThemeProviderState = {
  theme: 'dark',
  setTheme: () => null,
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  // Apply theme class with smooth transitions
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Disable transitions during the initial render
    const enableTransitions = () => {
      document.body.classList.remove('disable-transitions');
    };
    
    // Add a class to disable transitions during theme switch
    document.body.classList.add('disable-transitions');
    
    // Remove any existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Update data-theme attribute for other libraries
    root.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem(storageKey, theme);
    
    // Re-enable transitions after a short delay
    setTimeout(enableTransitions, 10);
    
    // Cleanup function to re-enable transitions if component unmounts during transition
    return () => {
      enableTransitions();
    };
  }, [theme, storageKey]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    toggleTheme: () => setTheme(prev => prev === 'dark' ? 'light' : 'dark'),
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
