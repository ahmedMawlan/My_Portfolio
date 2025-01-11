import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Zoom } from 'react-awesome-reveal';

interface Skill {
  name: string;
  level: number;
}

interface SkillsProps {
  skills: Skill[];
}

const skillImages = {
  'HTML/CSS': 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  'JavaScript': 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  'React': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  'TypeScript': 'https://th.bing.com/th/id/OIP.hVHgRBKtQk_sqrrWyL0q7AHaER?w=303&h=180&c=7&r=0&o=5&pid=1.7',
  'Tailwind CSS': 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  'Git': 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
};

export function Skills({ skills }: SkillsProps) {
  const { theme } = useTheme();
  
  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`} id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Skills</h2>
        <Zoom duration={1500} >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all`}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={skillImages[skill.name as keyof typeof skillImages]}
                    alt={skill.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-2">
                    <span className={`font-medium text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
                    <span className="text-cyan-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className={`w-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                    <div
                      className="bg-cyan-400 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
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