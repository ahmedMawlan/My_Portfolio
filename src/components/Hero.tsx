import React from 'react';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import {  Fade, Roll  } from "react-awesome-reveal";

interface HeroProps {
  name: string;
  title: string;
  photoUrl: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export function Hero({ name, title, photoUrl, socialLinks }: HeroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
        <Fade cascade damping={0.5} triggerOnce>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">{name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">{title}</h2>
        </Fade>

          {/* /* CV Download Button */}
          <a
            href="https://drive.google.com/file/d/1CCwEgyyj-nQ8j56Hbz5NkBlFwb_5b8Dz/view?usp=drivesdk"
            download
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-colors duration-300 mb-8"
          >
            <FileDown size={20} />
            Download CV
          </a>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-cyan-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="p-2 hover:text-cyan-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        
        </div>
        <div className="md:w-1/2">
            <Roll delay={300} duration={1000}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={photoUrl}
                alt={name}
                className="rounded-full w-full h-full object-cover relative z-10 border-4 border-cyan-400"
              />
              </div>
            </Roll> 
          
        </div>
      </div>
    </div>
  );
}