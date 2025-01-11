import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Zoom } from 'react-awesome-reveal';

interface ContactProps {
  email: string;
  phone: string;
  location: string;
}

export function Contact({ email, phone, location }: ContactProps) {
  const { theme } = useTheme();
  
  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`} id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Zoom duration={500}>
            <div className={`flex flex-col items-center p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg transition-colors duration-300`}>
              <Mail className={`w-8 h-8 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} mb-4`} />
              <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Email</h3>
              <a href={`mailto:${email}`} className={`${theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>
                {email}
              </a>
            </div>
          </Zoom>
          <Zoom duration={1000}>
            <div className={`flex flex-col items-center p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg transition-colors duration-300`}>
              <Phone className={`w-8 h-8 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} mb-4`} />
              <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Phone</h3>
              <a href={`tel:${phone}`} className={`${theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>
                {phone}
              </a>
            </div>
          </Zoom>
          <Zoom duration={1500}>
            <div className={`flex flex-col items-center p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg transition-colors duration-300`}>
              <MapPin className={`w-8 h-8 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} mb-4`} />
              <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Location</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-center`}>{location}</p>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
}