// src/constants/socialLinks.js
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaDev, FaCodepen, FaStackOverflow, FaMedium } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/deivysonjds',
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
];