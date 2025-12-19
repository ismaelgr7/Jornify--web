import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

interface HeaderProps {
  onContactClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" className="py-2.5 px-5 text-sm" onClick={onContactClick}>Acceder</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-slate-700 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 px-3">
              <Button fullWidth onClick={() => setIsOpen(false)}>Acceder</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;