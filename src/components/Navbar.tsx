import React, { useState } from 'react';
import { Home, User, Code2, FolderGit2, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { label: 'Home', icon: <Home size={20} />, href: '#home' },
    { label: 'About', icon: <User size={20} />, href: '#about' },
    { label: 'Skills', icon: <Code2 size={20} />, href: '#skills' },
    { label: 'Projects', icon: <FolderGit2 size={20} />, href: '#projects' }
  ];

  return (
    <nav className={`fixed w-full ${theme === 'dark' ? 'bg-gray-700/95' : 'bg-white/95'} backdrop-blur-sm z-40 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className={`${theme === 'dark' ? 'text-cyan-400' : 'text-gray-900'} font-bold text-xl transition-colors`}>Ahmed Ramadan</span>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} flex items-center gap-2 transition-colors`}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}