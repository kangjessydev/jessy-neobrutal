import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'white';
  className?: string;
  shadow?: boolean;
}

const Tag: React.FC<TagProps> = ({ 
  children, 
  variant = 'secondary', 
  className = '',
  shadow = false
}) => {
  const variants = {
    primary: 'bg-primary text-black',
    secondary: 'bg-secondary text-black',
    accent: 'bg-accent text-white',
    white: 'bg-white text-black',
  };

  return (
    <span className={`inline-block border-2 border-black px-3 py-1 font-lexend font-black text-[10px] uppercase tracking-wider leading-none transition-transform ${variants[variant]} ${shadow ? 'shadow-[3px_3px_0px_#000000]' : ''} ${className}`}>
      {children}
    </span>
  );
};

export default Tag;
