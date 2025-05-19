import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
  glowBorder?: boolean;
  glowColor?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glassEffect = false,
  glowBorder = false,
  glowColor = 'blue',
  hoverEffect = false,
}) => {
  const glassClasses = glassEffect 
    ? 'bg-black/30 backdrop-blur-lg border border-white/10'
    : 'bg-gray-900';
  
  const glowClasses = glowBorder
    ? `border border-${glowColor}-500/50 shadow-lg shadow-${glowColor}-500/20`
    : '';
  
  const hoverClasses = hoverEffect
    ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl'
    : '';
  
  return (
    <div className={`rounded-xl overflow-hidden ${glassClasses} ${glowClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '',
}) => {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '',
}) => {
  return (
    <div className={`px-5 pb-5 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '',
}) => {
  return (
    <div className={`px-5 py-4 border-t border-gray-800 ${className}`}>
      {children}
    </div>
  );
};