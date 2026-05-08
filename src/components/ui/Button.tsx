import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'black';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  id?: string;
  onClick?: () => void;
  customBg?: string;
  customShadow?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  type = 'button',
  id,
  onClick,
  customBg,
  customShadow,
  fullWidth = false
}) => {
  
  // Variant colors mapping
  const variants = {
    primary: 'bg-[#ffd700] text-black shadow-black',
    secondary: 'bg-[#ADFF2F] text-black shadow-black',
    tertiary: 'bg-white text-black shadow-black',
    outline: 'bg-transparent text-black border-4 border-black shadow-black',
    black: 'bg-black text-white shadow-[#ffd700]'
  };

  // Size mapping
  const sizes = {
    sm: 'px-4 py-2 text-[10px] tracking-widest',
    md: 'px-6 py-3 text-sm tracking-wider',
    lg: 'px-10 py-5 text-xl tracking-tighter'
  };

  // Shadow offsets based on size
  const shadowOffsets = {
    sm: 'shadow-[4px_4px_0px_0px_var(--tw-shadow-color)] hover:translate-x-[4px] hover:translate-y-[4px]',
    md: 'shadow-[8px_8px_0px_0px_var(--tw-shadow-color)] hover:translate-x-[8px] hover:translate-y-[8px]',
    lg: 'shadow-[12px_12px_0px_0px_var(--tw-shadow-color)] hover:translate-x-[12px] hover:translate-y-[12px]'
  };

  const baseClass = `
    inline-flex items-center justify-center 
    border-4 border-black font-lexend font-black uppercase 
    transition-all duration-200 active:scale-95
    hover:shadow-none
    ${fullWidth ? 'w-full' : ''}
    ${variants[variant]}
    ${sizes[size]}
    ${shadowOffsets[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const styling: React.CSSProperties = {
    ...(customBg ? { backgroundColor: customBg } : {}),
    ...(customShadow ? { '--tw-shadow-color': customShadow } as any : { '--tw-shadow-color': variant === 'black' ? '#ffd700' : '#000000' } as any)
  };

  if (href) {
    return (
      <Link href={href} className={baseClass} style={styling} id={id}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={baseClass} 
      style={styling}
      id={id} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
