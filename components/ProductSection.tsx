import React, { useState } from 'react';
import { Product } from '../types';

interface ProductSectionProps {
  products?: Product[];
  categoryDescription?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ products = [], categoryDescription }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-white">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl bg-white"
              alt="Enlarged view"
            />
            <button 
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categoryDescription && (
          <div className="mb-12 p-8 bg-blue-50 rounded-[32px] border border-blue-100">
            <p className="text-blue-900 font-medium leading-relaxed italic">
              {categoryDescription}
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div 
                className="h-72 overflow-hidden relative bg-white cursor-zoom-in flex items-center justify-center p-4"
                onClick={() => setSelectedImage(product.image)}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-slate-900/10 backdrop-blur-md rounded-full text-[10px] font-black text-slate-900 uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>
                {/* 放大提示按鈕 */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">{product.name}</h3>
                <p className="text-xs text-slate-500 mb-6 line-clamp-2 leading-relaxed font-medium">
                  {product.description}
                </p>
                <div className="space-y-1 mb-8 border-t border-slate-200 pt-6">
                  {/* Added optional chaining to specs map to handle optional field in Product interface */}
                  {product.specs?.map((spec, i) => (
                    <div key={i} className="flex items-center text-[10px] text-slate-600 font-bold">
                      <div className="w-1 h-1 bg-blue-600 rounded-full mr-3"></div>
                      {spec}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedImage(product.image)}
                  className="w-full py-3 bg-white border-2 border-slate-100 text-slate-900 rounded-xl font-black text-xs hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
                >
                  查看大圖與詳情
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;