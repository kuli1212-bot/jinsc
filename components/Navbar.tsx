
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME, COMPANY_SUB_NAV, PRODUCT_CATEGORIES, NAV_LABELS } from '../constants';

// Add interface for Navbar props
interface NavbarProps {
  lang: 'zh' | 'en';
  onToggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Create localized navigation items
  const labels = NAV_LABELS[lang];
  const navItems = [
    { label: labels.home, path: '/', key: 'home' },
    { label: labels.company, path: '/company', key: 'company' },
    { label: labels.products, path: '/products', key: 'products' },
    { label: labels.download, path: '/download', key: 'download' },
    { label: labels.contact, path: '/contact', key: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdown = (label: string | null) => {
    setActiveDropdown(label);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3 glass-morphism shadow-sm' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl transform transition-transform group-hover:rotate-12">
              JIN
            </div>
            <div>
              {/* Fix: Index COMPANY_NAME by lang to resolve [object Object] error */}
              <span className="text-xl font-black text-slate-900 tracking-tight block leading-none">{COMPANY_NAME[lang]}</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">Jin Xin Quan Precision</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div 
                key={item.path} 
                className="relative group"
                onMouseEnter={() => handleDropdown(item.label)}
                onMouseLeave={() => handleDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center ${
                    (location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== '/'))
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                  {(item.key === 'company' || item.key === 'products') && (
                    <svg className="ml-1 w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Sub-menu Dropdowns */}
                {activeDropdown === item.label && item.key === 'company' && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-2xl rounded-2xl border border-slate-100 p-2 mt-1 animate-in fade-in slide-in-from-top-2">
                    {COMPANY_SUB_NAV[lang].map((sub: any) => (
                      <Link key={sub.path} to={sub.path} className="block px-4 py-2 text-xs font-bold text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}

                {activeDropdown === item.label && item.key === 'products' && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-2xl rounded-2xl border border-slate-100 p-2 mt-1 animate-in fade-in slide-in-from-top-2">
                    {PRODUCT_CATEGORIES[lang].map((sub: any) => (
                      <Link key={sub.path} to={sub.path} className="block px-4 py-2 text-xs font-bold text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Language Switcher */}
            <button 
              onClick={onToggleLang}
              className="ml-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors"
            >
              {labels.lang}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={onToggleLang}
              className="px-3 py-2 bg-slate-100 text-slate-900 rounded-xl text-xs font-bold"
            >
              {labels.lang}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-xl text-slate-900 bg-slate-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-b border-slate-100 px-4 py-8 overflow-y-auto max-h-[80vh]">
          {navItems.map((item) => (
            <div key={item.path} className="mb-4">
              <Link to={item.path} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-lg font-black text-slate-900">
                {item.label}
              </Link>
              {item.key === 'company' && (
                <div className="ml-4 mt-2 space-y-1">
                  {COMPANY_SUB_NAV[lang].map((sub: any) => (
                    <Link key={sub.path} to={sub.path} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm font-bold text-slate-400">
                      - {sub.label}
                    </Link>
                  ))}
                </div>
              )}
              {item.key === 'products' && (
                <div className="ml-4 mt-2 space-y-1">
                  {PRODUCT_CATEGORIES[lang].map((sub: any) => (
                    <Link key={sub.path} to={sub.path} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm font-bold text-slate-400">
                      - {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
