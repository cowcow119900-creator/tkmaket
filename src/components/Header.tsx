import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { cn } from '../lib/utils';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <Logo light={false} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === item.path ? 'text-primary' : 'text-gray-600'
              )}
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            상담하기
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-600 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-lg font-medium p-2 rounded-lg',
                  location.pathname === item.path ? 'bg-blue-50 text-primary' : 'text-gray-600'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-white p-4 rounded-lg text-center font-bold"
              onClick={() => setIsOpen(false)}
            >
              24시간 무료 상담하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
