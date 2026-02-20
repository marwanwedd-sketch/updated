import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { PawPrint, CuteCat } from './PetDoodles';
import product1 from '../1.jpeg';
import product2 from '../2.png';
import product3 from '../3.jpeg';
import product5 from '../5.jpeg';
import product6 from '../6.jpeg';
import product7 from '../7.jpeg';
import product8 from '../8.jpeg';
import product9 from '../9.jpeg';
import product11 from '../11.jpeg';
import product13 from '../13.jpeg';
import product14 from '../14.jpeg';
import product15 from '../15.jpeg';
import product16 from '../16.jpeg';

type ProductShowcaseItem = {
  id: string;
  imageUrl: string;
  alt: string;
  name?: string;
  size?: string;
  summary: string;
  description?: string;
};

const CAT_PRODUCT_IDS = ['2', '3', '5', '6', '11', '14'];

const products: ProductShowcaseItem[] = [
  { id: '1', imageUrl: product1, alt: 'Chicken in Gravy', name: 'Chicken in Gravy', size: '80g', summary: 'Tender chicken in savory gravy. Real chicken, no artificial colors or flavors.', description: 'Made with real chicken and natural ingredients, this wet food is perfect for cats who love a meaty, flavorful meal.' },
  { id: '2', imageUrl: product2, alt: 'Dry food for cats', name: 'Dry food for cats', size: '2.5 kg', summary: 'Complete dry nutrition for adult cats. Crunchy kibble for dental health.', description: 'Complete and balanced dry nutrition. Provides all the essential nutrients your cat needs. Ideal for daily feeding.' },
  { id: '3', imageUrl: product3, alt: 'Feline Treats', name: 'Feline Treats - Chicken Recipe', size: '80g', summary: 'Real chicken treats with vitamins & taurine. Tender chunks in jelly.', description: 'Irresistible treats made with real chicken. Enriched with vitamins and taurine for heart and eye health. The perfect reward for your feline friend.' },
  { id: '5', imageUrl: product5, alt: 'Chicken & Salmon', name: 'Chicken & Salmon', size: '15g', summary: 'Chicken and salmon in a single-serve pouch. High protein, omega fatty acids.', description: 'A delicious blend in a convenient single-serve format. Supports a shiny coat and healthy skin.' },
  { id: '6', imageUrl: product6, alt: 'Chicken & Salmon', name: 'Chicken & Salmon', size: '90g', summary: 'Premium wet food: chicken & salmon. 100% human-grade ingredients.', description: 'Combining tender chicken and salmon with added vitamins and minerals. A nutritious meal cats love.' },
  { id: '7', imageUrl: product7, alt: 'Chunks in Gravy', name: 'Chunks in Gravy', size: '400g', summary: 'Hearty meat chunks in gravy. Protein-rich, satisfying meal.', description: 'A satisfying, complete meal that provides protein and moisture. Perfect for cats who prefer a chunkier texture.' },
  { id: '8', imageUrl: product8, alt: 'Chunks in Gravy', name: 'Chunks in Gravy', size: '170g', summary: 'Tender meat chunks in rich gravy. Quality ingredients, no fillers.', description: 'Made with quality ingredients and no fillers. A wholesome option for everyday feeding.' },
  { id: '9', imageUrl: product9, alt: 'Cremy chicken', name: 'Cremy chicken', size: '400g', summary: 'Smooth creamy chicken. Easy to eat—ideal for seniors or sensitive palates.', description: 'Easy to eat and digest. Ideal for senior cats or those with sensitive palates. Delicious and nutritious in every serving.' },
  { id: '11', imageUrl: product11, alt: 'Chicken in gravy', name: 'Chicken in gravy', size: '80g', summary: 'Succulent chicken in savory gravy. Single-serve pouch, real chicken first.', description: 'Single-serve pouch for freshness. A balanced meal with real chicken as the first ingredient.' },
  { id: '13', imageUrl: product13, alt: 'Cheesy chicken', name: 'Cheesy chicken', size: '170g', summary: 'Chicken with a hint of cheese. Creamy, irresistible, nutrient-rich.', description: 'Creamy texture and irresistible flavor. Enriched with essential nutrients for overall wellbeing.' },
  { id: '14', imageUrl: product14, alt: 'Gourmet morsels Salmon in sauce', name: 'Gourmet morsels Salmon in sauce', size: '85g', summary: 'Gourmet salmon morsels in sauce. Omega-rich for skin, coat & joints.', description: 'Premium quality for discerning cats. Omega-rich salmon supports skin, coat, and joint health.' },
  { id: '15', imageUrl: product15, alt: 'Tender Cuts in Gravy', name: 'Tender Cuts in Gravy', size: '12x50g', summary: 'Tender cuts in gravy, multipack portions. Variety and portion control.', description: 'Convenient multipack portions. Great for variety and portion control. Complete and balanced nutrition in every pouch.' },
  { id: '16', imageUrl: product16, alt: 'Beef in Gravy', name: 'Beef in Gravy', size: '85g', summary: 'Real beef in savory gravy. High-quality protein for strong muscles.', description: 'High-quality protein source for strong muscles. A hearty, flavorful option that cats find irresistible.' },
];

const catsProducts = products.filter((p) => CAT_PRODUCT_IDS.includes(p.id));
const dogsProducts = products.filter((p) => !CAT_PRODUCT_IDS.includes(p.id));

const ProductDetailModal: React.FC<{
  product: ProductShowcaseItem;
  onClose: () => void;
}> = ({ product, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
      style={{ backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] sm:max-h-[85vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 min-h-[44px] min-w-[44px] rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-forest-green hover:text-terracotta transition-all"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative h-40 sm:h-44 max-h-[200px] bg-gradient-to-br from-warm-sand/40 to-white px-6 py-4 shrink-0 flex items-center justify-center">
          <img
            src={product?.imageUrl ?? ''}
            alt={product?.alt ?? 'Product'}
            className="max-w-full max-h-full w-auto h-full object-contain"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="hidden absolute inset-0 items-center justify-center bg-warm-sand/30 text-forest-green/50 text-sm" style={{ display: 'none' }} aria-hidden>
            No image
          </div>
        </div>
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex-1 min-h-0">
          <h3 id="product-modal-title" className="text-2xl font-display font-bold text-forest-green mb-2">
            {product?.name ?? product?.alt ?? 'Product'}
          </h3>
          {product?.size && (
            <p className="text-terracotta font-semibold mb-3">{product.size}</p>
          )}
          <p className="text-forest-green font-medium leading-snug mb-4 pb-4 border-b border-forest-green/10">
            {product?.summary ?? 'Premium quality pet food from Siam Pet Food.'}
          </p>
          {product?.description && (
            <p className="text-forest-green/80 leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>
          )}
          <a
            href="#contact"
            onClick={onClose}
            className="mt-6 inline-flex items-center gap-2 bg-terracotta text-white px-6 py-3 rounded-full font-semibold hover:bg-terracotta-dark transition-all"
          >
            {t('products.contactUs')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  if (typeof document !== 'undefined' && document.body) {
    return createPortal(modalContent, document.body);
  }
  return modalContent;
};

const ProductTile: React.FC<{
  product: ProductShowcaseItem;
  onView: () => void;
}> = ({ product, onView }) => {
  const { t } = useLanguage();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onView}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onView(); } }}
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white p-3 sm:p-5 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 active:scale-[0.98] border border-forest-green/10 cursor-pointer touch-manipulation"
    >
      {/* View badge - visible; whole card and badge open modal */}
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onView(); }}
        className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-forest-green/15 text-forest-green text-xs font-semibold hover:bg-forest-green/25 active:scale-95 transition-colors"
        aria-label={`View details for ${product.name || product.alt}`}
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        View
      </button>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta/0 to-forest-green/0 group-hover:from-terracotta/5 group-hover:to-forest-green/5 transition-all duration-300 pointer-events-none rounded-2xl" />

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
      </div>

      <div className="relative aspect-square w-full bg-gradient-to-br from-warm-sand/40 to-white rounded-xl overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.alt}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-3"
        />
      </div>

      <div className="relative mt-4">
        <h3 className="text-base font-bold text-forest-green leading-tight line-clamp-2">
          {product.name || product.alt}
        </h3>
        {product.size && (
          <p className="text-sm text-forest-green/60 font-medium mt-1">
            {product.size}
          </p>
        )}
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onView(); }}
          className="mt-3 text-xs text-forest-green/50 font-medium flex items-center gap-1.5 group-hover:text-terracotta transition-colors cursor-pointer bg-transparent border-0 p-0"
        >
          <span>{t('products.viewDetails')}</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ProductSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<ProductShowcaseItem | null>(null);

  return (
    <section id="shop" className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-warm-sand/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex justify-center gap-1.5 mb-4">
            <PawPrint size={18} className="text-forest-green/35" />
            <PawPrint size={22} className="text-terracotta/40" />
            <PawPrint size={18} className="text-forest-green/35" />
          </div>
          <span className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-forest-green/10 text-forest-green font-semibold text-sm mb-4 sm:mb-6 tracking-wide uppercase">
            <CuteCat size={18} className="text-terracotta/70" />
            {t('products.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-forest-green mb-4 sm:mb-6">
            {t('products.title')}
          </h2>
          <p className="text-forest-green/60 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-1">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Cats section */}
        <div className="mb-14 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-forest-green mb-6 sm:mb-8">
            🐱 {t('about.cats')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 xl:gap-10">
            {catsProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductTile
                  product={product}
                  onView={() => setSelectedProduct(product)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dogs section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-forest-green mb-6 sm:mb-8">
            🐕 {t('about.dogs')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 xl:gap-10">
            {dogsProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductTile
                  product={product}
                  onView={() => setSelectedProduct(product)}
                />
              </div>
            ))}
          </div>
        </div>

        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}

        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-forest-green/70 mb-4 sm:mb-6 text-base sm:text-lg">{t('products.lookingFor')}</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-forest-green text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-forest-green/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] min-h-[48px]"
          >
            <span>{t('products.contactUs')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
