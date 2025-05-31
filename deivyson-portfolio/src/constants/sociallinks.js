// src/constants/socialLinks.js
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaDev, FaCodepen, FaStackOverflow, FaMedium } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/seu-usuario',
    icon: <FaGithub />,
    color: 'text-gray-800 dark:text-gray-200',
    hoverColor: 'hover:text-gray-600 dark:hover:text-gray-400'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/seu-perfil',
    icon: <FaLinkedin />,
    color: 'text-blue-600',
    hoverColor: 'hover:text-blue-800 dark:hover:text-blue-400'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/seu-usuario',
    icon: <FaTwitter />,
    color: 'text-sky-500',
    hoverColor: 'hover:text-sky-700 dark:hover:text-sky-300'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/seu-usuario',
    icon: <FaInstagram />,
    color: 'text-pink-600',
    hoverColor: 'hover:text-pink-800 dark:hover:text-pink-400'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/seu-canal',
    icon: <FaYoutube />,
    color: 'text-red-600',
    hoverColor: 'hover:text-red-800 dark:hover:text-red-400'
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to/seu-usuario',
    icon: <FaDev />,
    color: 'text-gray-800 dark:text-gray-200',
    hoverColor: 'hover:text-gray-600 dark:hover:text-gray-400'
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io/seu-usuario',
    icon: <FaCodepen />,
    color: 'text-gray-800 dark:text-gray-200',
    hoverColor: 'hover:text-gray-600 dark:hover:text-gray-400'
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/seu-id',
    icon: <FaStackOverflow />,
    color: 'text-orange-500',
    hoverColor: 'hover:text-orange-700 dark:hover:text-orange-300'
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@seu-usuario',
    icon: <FaMedium />,
    color: 'text-gray-800 dark:text-gray-200',
    hoverColor: 'hover:text-gray-600 dark:hover:text-gray-400'
  },
  {
    name: 'Hashnode',
    url: 'https://hashnode.com/@seu-usuario',
    icon: <SiHashnode />,
    color: 'text-blue-500',
    hoverColor: 'hover:text-blue-700 dark:hover:text-blue-300'
  }
];

// Versão simplificada para o componente SocialIcons (apenas ícones principais)
export const mainSocialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/seu-usuario',
    icon: <FaGithub />
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/seu-perfil',
    icon: <FaLinkedin />
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/seu-usuario',
    icon: <FaTwitter />
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/seu-usuario',
    icon: <FaInstagram />
  }
];