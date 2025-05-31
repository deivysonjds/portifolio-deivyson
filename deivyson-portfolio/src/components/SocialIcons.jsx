// src/components/SocialIcons.jsx
'use client';

import { mainSocialLinks } from '@/constants/sociallinks';
import { useThemeStore } from '@/stores/themeStore';

export default function SocialIcons({ className = '' }) {
  const { theme } = useThemeStore();

  return (
    <div className={`flex space-x-4 ${className}`}>
      {mainSocialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl transition ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}