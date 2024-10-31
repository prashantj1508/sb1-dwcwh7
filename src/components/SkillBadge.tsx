import React from 'react';

interface SkillBadgeProps {
  children: React.ReactNode;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ children }) => {
  return (
    <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
      {children}
    </span>
  );
};

export default SkillBadge;