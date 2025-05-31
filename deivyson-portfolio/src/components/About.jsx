// src/components/About.jsx
'use client';

import { useThemeStore } from '@/stores/themeStore';

export default function About() {
  const { theme } = useThemeStore();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          About <span className="text-purple-500">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className={`rounded-lg p-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}>
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
          
          <div className={`md:w-2/3 md:pl-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="mb-4 text-lg">
              I'm a passionate frontend developer with 3+ years of experience creating modern web applications. 
              I specialize in React, Next.js, and building responsive, user-friendly interfaces.
            </p>
            <p className="mb-6 text-lg">
              My journey in web development started when I was in college, and since then I've been constantly 
              learning and improving my skills to deliver high-quality products.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><span className="font-medium">Name:</span> Deivyson Silva</p>
                <p><span className="font-medium">Email:</span> deivyson@example.com</p>
              </div>
              <div>
                <p><span className="font-medium">From:</span> Brazil</p>
                <p><span className="font-medium">Freelance:</span> Available</p>
              </div>
            </div>
            
            <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}