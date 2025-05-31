// src/components/Header.jsx
'use client';

import Link from 'next/link';
import { useThemeStore } from '@/stores/themeStore';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { theme } = useThemeStore();

  return (
    <header className={`fixed w-full z-50 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>Portfolio</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="#home" className={`${"hover:text-purple-500 transition"} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Home</Link>
          <Link href="#about" className={`${"hover:text-purple-500 transition"} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>About</Link>
          <Link href="#skills" className={`${"hover:text-purple-500 transition"} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Skills</Link>
          <Link href="#projects" className={`${"hover:text-purple-500 transition"} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Projects</Link>
          <Link href="#contact" className={`${"hover:text-purple-500 transition"} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Contact</Link>
        </nav>
        
        <ThemeToggle />
      </div>
    </header>
  );
}