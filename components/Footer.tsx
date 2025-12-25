import React from 'react';
import { COMPANY_NAME, NAV_LABELS, CONTACT_INFO, PRODUCT_CATEGORIES } from '../constants';

interface FooterProps {
  lang: 'zh' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const labels = NAV_LABELS[lang];
  const navItems = [
    { label: labels.home, path: '/' },
    { label: labels.company, path: '/company' },
    { label: labels.products, path: '/products' },
    { label: labels.download, path: '/download' },
    { label: labels.contact, path: '/contact' },
  ];

  return (
    <footer className="bg-brand-dark text-slate-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center">
                <span className="text-brand-dark font-black text-lg">JSC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-brand-gold tracking-tight whitespace-nowrap">{COMPANY_NAME[lang]}</span>
                <span className="text-[10px] block text-slate-500 font-bold uppercase tracking-widest mt-1 whitespace-nowrap">JIN SHIN CHYUAN INDUSTRY CO., LTD</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              {lang === 'zh'
                ? '致力於提供最優質的精密加工解決方案。以誠信、品質與技術為核心，與客戶共創雙贏。'
                : 'Dedicated to providing top-tier precision processing solutions. Driven by integrity, quality, and technology.'}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{labels.footer_products}</h4>
            <ul className="space-y-4 text-sm">
              {PRODUCT_CATEGORIES[lang].map((cat: any) => (
                <li key={cat.id}>{cat.label}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{labels.footer_links}</h4>
            <ul className="space-y-4 text-sm">
              {navItems.map(item => (
                <li key={item.path}><a href={`#${item.path}`} className="hover:text-white transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{labels.footer_contact}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="line-clamp-2">{lang === 'zh' ? CONTACT_INFO.address : CONTACT_INFO.address_en}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-brand-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-brand-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-brand-gold font-bold">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-[10px] font-bold text-slate-600 uppercase tracking-widest">
          <p>© 2024 {COMPANY_NAME[lang]} · {labels.footer_copy}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;