import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import {
  PRODUCTS, COMPANY_NAME, PRODUCT_CATEGORIES,
  MAIN_FEATURES, HOME_TEXT, CONTACT_INFO, CONTACT_PAGE_TEXT,
  DOWNLOAD_RESOURCES, ABOUT_TEXT, EQUIPMENT_LIST, NAV_LABELS
} from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = ({ lang }: { lang: 'zh' | 'en' }) => {
  const text = HOME_TEXT[lang];
  const features = MAIN_FEATURES[lang];

  return (
    <>
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-brand-dark text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900/40 -z-10 rounded-l-[120px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-dark via-brand-dark/95 to-slate-900 -z-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 z-10 mb-16 lg:mb-0">
              <span className="inline-block px-4 py-1.5 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                {lang === 'zh' ? '創立於 1978 · 45年專業經驗' : 'Founded 1978 · 45 Years Expertise'}
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
                {text.hero_title_1} <br />
                <span className="text-brand-gold">{text.hero_title_2}</span>
              </h1>
              <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
                {text.description}
              </p>
              <div className="flex gap-4">
                <Link to="/products" className="px-8 py-4 bg-brand-gold text-brand-dark rounded-2xl font-black hover:scale-105 transition-transform shadow-xl shadow-brand-gold/20">
                  {lang === 'zh' ? '探索產品' : 'Explore'}
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-black hover:bg-white/10 transition-all">
                  {lang === 'zh' ? '聯絡我們' : 'Contact'}
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-brand-gold/20 rounded-[52px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img src="https://duk.tw/FkCMrZ.png" alt="Factory" className="relative w-full h-auto rounded-[48px] shadow-2xl border border-white/5" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-t border-slate-200 pt-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{text.feature_title}</h2>
            <p className="text-slate-500 mt-2">{text.feature_subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature: any) => (
              <Link key={feature.id} to={feature.path} className="group relative overflow-hidden rounded-[32px] aspect-[4/3] bg-slate-200 shadow-xl shadow-slate-200/50 block">
                <img src={feature.image} alt={feature.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2 block">{feature.subtitle}</span>
                  <h3 className="text-white text-3xl font-black mb-3">{feature.title}</h3>
                  <p className="text-slate-300 text-sm opacity-90">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const CompanyPage = ({ lang }: { lang: 'zh' | 'en' }) => {
  const text = ABOUT_TEXT[lang];
  const location = useLocation();
  const path = location.pathname;

  const renderContent = () => {
    if (path.includes('/philosophy')) {
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl font-black text-white mb-8 border-b-4 border-brand-gold inline-block">{text.philosophy_title}</h1>
          <p className="text-lg text-slate-400 leading-relaxed font-medium mb-12">{text.philosophy_content}</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {text.philosophy_list.map((item: string, i: number) => (
              <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10 font-black text-brand-gold text-center shadow-sm text-xl flex items-center justify-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      );
    } else if (path.includes('/equipment')) {
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl font-black text-white mb-8 border-b-4 border-brand-gold inline-block">{lang === 'zh' ? '精密設備' : 'Machinery'}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EQUIPMENT_LIST.map((eq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="aspect-square bg-white/5 p-6">
                  <img src={eq.image} alt={eq.name} className="w-full h-full object-contain" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-black text-white mb-1">{eq.name}</h4>
                  <p className="text-brand-gold text-xs font-bold uppercase mb-4">{eq.brand}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{eq.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (path.includes('/processing')) {
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl font-black text-white mb-8 border-b-4 border-brand-gold inline-block">{text.processing_title}</h1>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <p className="text-lg text-slate-400 leading-relaxed font-medium mb-8">{text.processing_content}</p>
              <div className="grid grid-cols-1 gap-4">
                {text.processing_items.map((item: string, i: number) => (
                  <div key={i} className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark font-bold shrink-0">{i + 1}</div>
                    <span className="font-bold text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={text.processing_image} alt="Processing" className="w-full rounded-[48px] shadow-2xl border border-white/5" />
            </div>
          </div>
        </div>
      );
    } else if (path.includes('/iso')) {
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl font-black text-white mb-8 border-b-4 border-brand-gold inline-block">{text.iso_title}</h1>
          <div className="bg-slate-900 p-12 rounded-[48px] text-white">
            <h2 className="text-3xl font-black text-brand-gold mb-6">{text.iso_subtitle}</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">{text.iso_content}</p>
            <div className="inline-block p-6 bg-brand-gold rounded-3xl">
              <p className="text-2xl font-black italic text-brand-dark">{text.iso_policy}</p>
            </div>
          </div>
        </div>
      );
    } else {
      // Default: History
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl font-black text-white mb-8 border-b-4 border-brand-gold inline-block">{text.history_title}</h1>
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
            <div className="lg:w-1/2">
              <p className="text-lg text-slate-400 leading-relaxed font-medium">{text.history_content}</p>
            </div>
            <div className="lg:w-1/2">
              <img src={text.history_image} alt="History" className="w-full rounded-[48px] shadow-2xl border border-white/5" />
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="pt-40 pb-24 bg-brand-dark min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </div>
    </div>
  );
};

const DownloadPage = ({ lang }: { lang: 'zh' | 'en' }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const labels = NAV_LABELS[lang];
  const cats = PRODUCT_CATEGORIES[lang];

  return (
    <div className="pt-40 pb-24 bg-brand-dark min-h-screen relative text-white">
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <img src={selectedImage} className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl bg-white/5 border border-white/10" alt="Enlarged Catalog" />
            <button className="absolute -top-12 right-0 text-white hover:text-brand-gold transition-colors" onClick={() => setSelectedImage(null)}>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">{labels.download}</h1>
          <p className="text-slate-400 text-lg font-medium">{labels.download_hint}</p>
        </div>

        {cats.map((cat: any) => (
          <div key={cat.id} className="mb-20">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-10 w-2 bg-brand-gold rounded-full"></div>
              <h2 className="text-3xl font-black text-white">{cat.label}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {DOWNLOAD_RESOURCES.filter(res => res.category === cat.id).map((res: any) => (
                <div key={res.id} className="group flex flex-col space-y-3">
                  <div className="aspect-[3/4] bg-white/5 rounded-[32px] overflow-hidden border border-white/10 shadow-sm cursor-zoom-in relative group" onClick={() => setSelectedImage(res.image)}>
                    <img src={res.image} alt={lang === 'zh' ? res.title_zh : res.title_en} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all flex items-center justify-center">
                      <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest truncate max-w-[120px]">{lang === 'zh' ? res.title_zh : res.title_en}</span>
                    <a href={res.image} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white flex items-center space-x-1 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      <span className="text-xs font-bold">{lang === 'zh' ? '下載' : 'DL'}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactPage = ({ lang }: { lang: 'zh' | 'en' }) => {
  const text = CONTACT_PAGE_TEXT[lang];
  return (
    <div className="pt-40 pb-24 bg-brand-dark min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">{text.title}</h1>
          <p className="text-slate-400 text-lg font-medium">{text.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 shadow-sm">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-dark shrink-0 shadow-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-gold uppercase tracking-widest mb-1">{text.address_label}</h4>
                    <p className="text-lg font-bold text-white leading-tight">
                      {lang === 'zh' ? CONTACT_INFO.address : CONTACT_INFO.address_en}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white shrink-0 border border-white/10 shadow-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">{text.phone_label}</h4>
                    <p className="text-2xl font-black text-white">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white shrink-0 border border-white/10 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">{text.fax_label}</h4>
                    <p className="text-xl font-bold text-slate-300">{CONTACT_INFO.fax}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-gold uppercase tracking-widest mb-1">{text.email_label}</h4>
                    <p className="text-lg font-black text-brand-gold underline underline-offset-4">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[40px] text-white flex items-center justify-between">
              <div>
                <p className="text-brand-gold text-xs font-black uppercase tracking-widest mb-1">Business Hours</p>
                <p className="font-bold text-slate-300">Mon - Fri: 08:30 - 17:30</p>
              </div>
              <a href={`mailto:${CONTACT_INFO.email}`} className="px-6 py-3 bg-brand-gold hover:bg-white transition-all rounded-2xl font-black text-sm text-brand-dark shadow-xl">{CONTACT_PAGE_TEXT[lang].consultation}</a>
            </div>
          </div>

          <div className="h-[500px] lg:h-full min-h-[600px] rounded-[48px] overflow-hidden shadow-2xl border border-white/10 relative group bg-white/5">
            <iframe src={CONTACT_INFO.google_maps_embed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="JINSC Location" className="grayscale-[0.1] contrast-[1.05] transition-all duration-700 group-hover:grayscale-0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsPage = ({ categoryId, lang }: { categoryId?: string, lang: 'zh' | 'en' }) => {
  const currentCategory = PRODUCT_CATEGORIES[lang].find((c: any) => c.id === categoryId);
  const filteredProducts = categoryId && currentCategory
    ? PRODUCTS.filter(p => p.category_id === categoryId)
    : PRODUCTS;

  if (categoryId === 'hardware') {
    return (
      <div className="pt-24 pb-20 bg-brand-dark min-h-screen text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter">{currentCategory?.label}</h1>
          <div className="flex justify-center flex-wrap gap-3 mt-8">
            {PRODUCT_CATEGORIES[lang].map((cat: any) => (
              <Link key={cat.id} to={cat.path} className={`px-8 py-3 rounded-2xl text-sm font-bold border transition-all ${categoryId === cat.id ? 'bg-brand-gold text-brand-dark border-brand-gold shadow-lg' : 'border-white/10 text-white/40 hover:border-brand-gold hover:text-brand-gold'}`}>{cat.label}</Link>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 rounded-[48px] overflow-hidden border border-white/10 p-8 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <img src={currentCategory?.featuredImage} alt={currentCategory?.label} className="w-full h-auto rounded-[32px] shadow-2xl bg-white/5 border border-white/10" />
              </div>
              <div className="lg:w-1/2">
                <p className="text-lg text-slate-400 font-medium leading-relaxed mb-8 italic">{currentCategory?.description}</p>
                <h4 className="text-xl font-black text-white mb-6">{NAV_LABELS[lang].list_prefix}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentCategory?.items?.map((item: string, i: number) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/10 shadow-sm">
                      <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark text-xs font-black shrink-0">{i + 1}</div>
                      <span className="font-bold text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-brand-dark min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter">{currentCategory ? currentCategory.label : 'Products'}</h1>
        <div className="flex justify-center flex-wrap gap-3 mt-8">
          {PRODUCT_CATEGORIES[lang].map((cat: any) => (
            <Link key={cat.id} to={cat.path} className={`px-8 py-3 rounded-2xl text-sm font-bold border transition-all ${categoryId === cat.id ? 'bg-brand-gold text-brand-dark border-brand-gold shadow-lg' : 'border-white/10 text-white/40 hover:border-brand-gold hover:text-brand-gold'}`}>{cat.label}</Link>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductSection
          products={filteredProducts.map(p => ({
            ...p,
            category: currentCategory?.label || '',
            description: lang === 'zh' ? p.description_zh : (p.description_en || p.description_zh),
            specs: lang === 'zh' ? p.specs_zh : (p.specs_en || p.specs_zh)
          }))}
          categoryDescription={currentCategory?.description}
        />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const toggleLang = () => setLang(prev => prev === 'zh' ? 'en' : 'zh');

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-dark selection:bg-brand-gold/30 selection:text-brand-dark">
        <Navbar lang={lang} onToggleLang={toggleLang} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/company" element={<CompanyPage lang={lang} />} />
            <Route path="/company/*" element={<CompanyPage lang={lang} />} />
            <Route path="/products" element={<Navigate to="/products/hardware" replace />} />
            <Route path="/products/hardware" element={<ProductsPage categoryId="hardware" lang={lang} />} />
            <Route path="/products/razors" element={<ProductsPage categoryId="razors" lang={lang} />} />
            <Route path="/products/gifts" element={<ProductsPage categoryId="gifts" lang={lang} />} />
            <Route path="/download" element={<DownloadPage lang={lang} />} />
            <Route path="/contact" element={<ContactPage lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  );
};

export default App;