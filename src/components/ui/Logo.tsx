import React from "react";

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        <defs>
          <linearGradient id="qGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" /> {/* Blue */}
            <stop offset="100%" stopColor="#10B981" /> {/* Emerald */}
          </linearGradient>
        </defs>
        
        {/* Network Node mimicking the user's logo top-right attachment */}
        <line x1="80" y1="20" x2="60" y2="8" stroke="#10B981" strokeWidth="3" opacity="0.8" />
        <line x1="80" y1="20" x2="92" y2="35" stroke="#3B82F6" strokeWidth="3" opacity="0.8" />
        <circle cx="80" cy="20" r="8" fill="#10B981" />
        <circle cx="60" cy="8" r="6" fill="#2563EB" />
        <circle cx="92" cy="35" r="5" fill="#3B82F6" />

        {/* Dynamic Q body */}
        <circle cx="42" cy="42" r="32" fill="none" stroke="url(#qGrad)" strokeWidth="14" className="opacity-95" />
        {/* Q tail (wave-like curve) */}
        <path d="M 55 55 Q 75 60 85 85" fill="none" stroke="url(#qGrad)" strokeWidth="14" strokeLinecap="round" />
      </svg>
    </div>
  );
};
