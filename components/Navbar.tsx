
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-morphism shadow-2xl' : 'py-8 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-dark font-black text-xl shadow-xl transform transition-transform group-hover:rotate-12 group-hover:scale-110">
              JSC
            </div>
            <div>
              <span className="text-xl font-black tracking-tight block leading-none text-brand-gold whitespace-nowrap">{COMPANY_NAME[lang]}</span>
              <span className={`text-[10px] font-bold uppercase tracking-widest mt-1 block transition-colors whitespace-nowrap ${scrolled ? 'text-slate-400' : 'text-white/60'}`}>JIN SHIN CHYUAN INDUSTRY CO., LTD</span>
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
                  className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center ${location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== '/')
                    ? 'text-brand-gold'
                    : 'text-white hover:text-brand-gold'
                    }`}
                >
                  {item.label}
                  {(item.key === 'company' || item.key === 'products') && (
                    <svg className="ml-1 w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {activeDropdown === item.label && (item.key === 'company' || item.key === 'products') && (
                  <div className="absolute top-full left-0 w-48 pt-2 -mt-1 animate-in fade-in slide-in-from-top-2">
                    <div className="bg-brand-dark/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/10 p-2">
                      {(item.key === 'company' ? COMPANY_SUB_NAV[lang] : PRODUCT_CATEGORIES[lang]).map((sub: any) => (
                        <Link key={sub.path} to={sub.path} className="block px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-gold hover:bg-white/5 rounded-lg transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={onToggleLang}
              className={`ml-4 px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${scrolled ? 'bg-brand-gold text-brand-dark hover:bg-white' : 'bg-brand-dark text-white hover:bg-brand-gold hover:text-brand-dark'}`}
            >
              {labels.lang}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onToggleLang}
              className="px-3 py-2 bg-brand-gold text-brand-dark rounded-xl text-[10px] font-black uppercase"
            >
              {labels.lang}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-xl transition-all text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl shadow-2xl border-b border-white/10 px-4 py-8 overflow-y-auto max-h-[80vh]">
          {navItems.map((item) => (
            <div key={item.path} className="mb-6">
              <Link to={item.path} onClick={() => setIsOpen(false)} className={`block px-4 py-2 text-xl font-black uppercase tracking-tighter ${location.pathname === item.path ? 'text-brand-gold' : 'text-white'}`}>
                {item.label}
              </Link>
              {(item.key === 'company' || item.key === 'products') && (
                <div className="ml-4 mt-2 space-y-1">
                  {(item.key === 'company' ? COMPANY_SUB_NAV[lang] : PRODUCT_CATEGORIES[lang]).map((sub: any) => (
                    <Link key={sub.path} to={sub.path} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-xs font-bold text-slate-400 hover:text-brand-gold">
                      {sub.label}
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
