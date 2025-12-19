import React from 'react';

interface LogoProps {
  className?: string;
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", withText = true }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon Graphic */}
      <div className="relative w-9 h-9 flex items-center justify-center">
        {/* Background rounded square - simulating app icon shape */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          {/* Blue Hexagon Shape */}
          <path
            d="M50 10L85 30V70L50 90L15 70V30L50 10Z"
            fill="url(#logoGradient)"
            stroke="#2563EB"
            strokeWidth="2"
            className="drop-shadow-sm"
          />
          {/* White Checkmark */}
          <path
            d="M35 50L45 60L65 40"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Text Brand */}
      {withText && (
        <span className="text-xl font-bold text-slate-900 tracking-tight">
          Jornify
        </span>
      )}
    </div>
  );
};

export default Logo;