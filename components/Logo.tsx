
import React from 'react';
import { Zap } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  iconSize = 24, 
  textSize = "text-xl md:text-2xl", 
  light = false 
}) => {
  return (
    <div className={`flex items-center space-x-2 group cursor-pointer ${className}`}>
      <div className={`flex items-center justify-center p-1.5 rounded-lg transition-transform duration-300 group-hover:scale-110 ${light ? 'bg-white' : 'bg-[#3dcd58]'}`}>
        <Zap 
          size={iconSize} 
          className={light ? 'text-[#3dcd58]' : 'text-white'} 
          fill="currentColor" 
        />
      </div>
      <span className={`font-bold tracking-tighter transition-colors ${textSize} ${light ? 'text-white' : 'text-gray-900'}`}>
        DJAJA <span className={light ? 'text-white/80' : 'text-[#3dcd58]'}>LISTRIK</span>
      </span>
    </div>
  );
};

export default Logo;
