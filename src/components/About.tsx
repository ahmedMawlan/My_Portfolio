import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface AboutProps {
  description: string[];
}

export function About({ description }: AboutProps) {
  const { theme } = useTheme();
  
  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} transition-colors duration-300`} id="about">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
        <div className="flex flex-col md:flex-row gap-20 items-center justify-between">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            {description.map((paragraph, index) => (
              <p key={index} className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'} leading-relaxed transition-colors`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}