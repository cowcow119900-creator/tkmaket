import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className, showText = true, light = false }: LogoProps) {
  const gradientId = `logo-gradient-${light ? 'light' : 'dark'}`;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative shrink-0", showText ? "w-10 h-10" : "w-full h-full")}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          {/* Circular Arrows */}
          <path 
            d="M50 10C27.9 10 10 27.9 10 50C10 55.5 12.1 60.5 15.5 64.3L25 55C23.1 53.5 22 51.9 22 50C22 34.5 34.5 22 50 22C55.5 22 60.5 23.6 64.7 26.3L74 17C67.3 12.6 59 10 50 10Z" 
            fill={`url(#${gradientId})`} 
          />
          <path 
            d="M84.5 35.7L75 45C76.9 46.5 78 48.1 78 50C78 65.5 65.5 78 50 78C44.5 78 39.5 76.4 35.3 73.7L26 83C32.7 87.4 41 90 50 90C72.1 90 90 72.1 90 50C90 44.5 87.9 39.5 84.5 35.7Z" 
            fill={`url(#${gradientId})`} 
          />
          {/* Arrow Heads */}
          <path d="M50 0L65 20H35L50 0Z" fill={`url(#${gradientId})`} />
          <path d="M50 100L35 80H65L50 100Z" fill={`url(#${gradientId})`} />
          
          {/* Ticket Icon in Center */}
          <rect x="30" y="40" width="40" height="20" rx="2" fill={`url(#${gradientId})`} />
          <circle cx="30" cy="50" r="4" fill={light ? "#1E3A8A" : "#F8FAFC"} />
          <circle cx="70" cy="50" r="4" fill={light ? "#1E3A8A" : "#F8FAFC"} />
          
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor={light ? "#93C5FD" : "#3B82F6"} />
              <stop offset="1" stopColor={light ? "#FFFFFF" : "#1E3A8A"} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn("text-xl font-black tracking-tighter", light ? "text-white" : "text-primary-dark")}>
            티켓거래소
          </span>
          <span className={cn("text-[8px] font-bold tracking-widest uppercase opacity-80", light ? "text-blue-200" : "text-primary")}>
            Trusted Digital Platform
          </span>
        </div>
      )}
    </div>
  );
}
