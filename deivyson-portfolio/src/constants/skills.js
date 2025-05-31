// src/constants/skills.js
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiGraphql } from 'react-icons/si';

export const skills = [
  { name: 'React', icon: <FaReact />, level: 90, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: '#000000' },
  { name: 'JavaScript', icon: <FaJs />, level: 88, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 80, color: '#3178C6' },
  { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85, color: '#06B6D4' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 75, color: '#339933' },
  { name: 'Redux', icon: <SiRedux />, level: 80, color: '#764ABC' },
  { name: 'GraphQL', icon: <SiGraphql />, level: 70, color: '#E10098' },
  { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#F05032' },
];