import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-black tracking-wide transition-all duration-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 active:translate-y-1";
  
  // "Chunky" 3D styles similar to gamified learning apps
  const variants = {
    primary: "bg-studysics-crimson text-white border-b-4 border-rose-800 hover:bg-rose-500 hover:border-rose-700 active:border-b-0",
    secondary: "bg-studysics-blue text-white border-b-4 border-slate-900 hover:bg-slate-800 hover:border-slate-950 active:border-b-0",
    outline: "bg-white text-slate-700 border-2 border-slate-200 border-b-4 hover:bg-slate-50 hover:border-slate-300 active:border-b-2",
    ghost: "text-slate-600 hover:bg-slate-100 hover:text-studysics-blue font-bold",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;