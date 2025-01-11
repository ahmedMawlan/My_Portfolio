import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-14 h-7 flex items-center">
        <div
          className={`absolute w-6 h-6 rounded-full transform transition-transform duration-300 ${
            theme === 'dark' 
              ? 'translate-x-8 bg-indigo-400' 
              : 'translate-x-0 bg-yellow-400'
          }`}
        />
        <div className="absolute left-1 text-yellow-400 opacity-100 dark:opacity-0 transition-opacity duration-300">
          <Sun size={18} />
        </div>
        <div className="absolute right-1 text-indigo-400 opacity-0 dark:opacity-100 transition-opacity duration-300">
          <Moon size={18} />
        </div>
      </div>
      <span className="sr-only">{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</span>
    </button>
  );
}