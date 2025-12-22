
import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_TEXT } from '../constants';

// Add interface for Hero props
interface HeroProps {
  lang: 'zh' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const text = HOME_TEXT[lang];

  return (
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 rounded-l-[120px]"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10 mb-16 lg:mb-0">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              {lang === 'zh' ? '創立於 1978 · 45年專業經驗' : 'Founded 1978 · 45 Years Expertise'}
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
              {text.hero_title_1} <br />
              <span className="text-blue-600">{text.hero_title_2}</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
              {/* Fix: Use localized description from HOME_TEXT */}
              {text.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/products" className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-2xl shadow-slate-200">
                {lang === 'zh' ? '瀏覽產品' : 'Browse Products'}
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:border-blue-600 transition-all">
                {lang === 'zh' ? '聯絡專員' : 'Contact Us'}
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 flex justify-center items-center">
              <div className="relative group">
                <img 
                  src="https://duk.tw/FkCMrZ.png" 
                  alt="JINSC Factory Showcase" 
                  className="w-full h-auto rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-[48px] ring-1 ring-inset ring-slate-900/5 pointer-events-none"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[32px] shadow-2xl border border-slate-100 max-w-[200px] hidden xl:block animate-bounce-slow">
                 <div className="flex items-center space-x-2 text-blue-600 mb-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.827a1 1 0 00-.788 0l-7 3a1 1 0 000 1.846l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.846l-7-3zM3.172 10.757a1 1 0 011.105-.247L10 12.512l5.723-2.002a1 1 0 11.649 1.898l-6 2.1a1 1 0 01-.649 0l-6-2.1a1 1 0 01-.723-1.651z" /></svg>
                    <span className="text-[10px] font-black uppercase tracking-tighter">{lang === 'zh' ? '專業技術領先' : 'Tech Leader'}</span>
                 </div>
                 <p className="text-[10px] font-bold text-slate-500 leading-relaxed">
                   {lang === 'zh' 
                     ? '深耕台灣，服務全球。JINSC 致力於精密金屬加工的極致展現。' 
                     : 'Based in Taiwan, serving the world. JINSC strives for excellence in precision metal processing.'}
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
