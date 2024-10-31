import React from 'react';
import { Code, Wrench, Cpu, Database, Palette } from 'lucide-react';
import SkillBadge from './SkillBadge';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <Code className="text-blue-400" size={20} />,
      skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Redux', 'Vue.js']
    },
    {
      title: 'Backend',
      icon: <Database className="text-blue-400" size={20} />,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs']
    },
    {
      title: 'DevOps',
      icon: <Wrench className="text-blue-400" size={20} />,
      skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux', 'Nginx']
    },
    {
      title: 'Other Technologies',
      icon: <Cpu className="text-blue-400" size={20} />,
      skills: ['Python', 'Java', 'WebSockets', 'Redis', 'Jest', 'Cypress']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Palette className="text-blue-400" />
          <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;