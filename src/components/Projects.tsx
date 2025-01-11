import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Zoom } from 'react-awesome-reveal';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const { theme } = useTheme();
  
  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} transition-colors duration-300`} id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Projects</h2>
        <Zoom  duration={2000}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-600'} text-sm rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Zoom>
      </div>
    </section>
  );
}