import React from 'react';

interface BadgeProps {
  text: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color = 'bg-blue-500' }) => {
  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-bold text-white rounded-full ${color}`}>
      {text}
    </span>
  );
};

export default Badge;