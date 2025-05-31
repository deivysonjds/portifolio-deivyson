// src/components/Hero.jsx
'use client';

import { useThemeStore } from '@/stores/themeStore';
import SocialIcons from './SocialIcons';

export default function Hero() {
  const { theme } = useThemeStore();

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Hi, I'm <span className="text-purple-500">Deivyson</span>
          </h1>
          <h2 className={`text-2xl md:text-3xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Frontend Developer
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            I build exceptional digital experiences with modern technologies.
          </p>
          <div className="flex space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition">
              View Projects
            </button>
            <button className={`border ${theme === 'dark' ? 'border-purple-400 text-purple-400' : 'border-purple-600 text-purple-600'} px-6 py-3 rounded-lg font-medium transition hover:bg-purple-50 dark:hover:bg-purple-900/20`}>
              Contact Me
            </button>
          </div>
          <SocialIcons className="mt-8" />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className={`rounded-full p-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} shadow-xl`}>
            <div className="rounded-full overflow-hidden border-4 border-purple-500">
              {/* Replace with your image */}
              <div className="w-full h-64 md:h-80 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}