
import React, { useState, useEffect } from 'react';
import webLogo from '../web_logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-forest-green/10' 
        : 'bg-warm-sand/80 backdrop-blur-md border-b border-forest-green/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#hero" className="flex items-center space-x-2 sm:space-x-3 group min-h-[44px] min-w-[44px] items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-white/90 border border-forest-green/10 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all group-hover:scale-105 shrink-0">
              <img src={webLogo} alt="Siam Pet Food logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg sm:text-2xl font-display font-bold text-forest-green group-hover:text-terracotta transition-colors truncate max-w-[140px] xs:max-w-none">
              Siam Pet Food
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-1">
            <a 
              href="#hero" 
              className="px-4 py-2 rounded-lg text-forest-green/80 font-medium hover:text-forest-green hover:bg-forest-green/5 transition-all relative group"
            >
              {t('nav.home')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#shop" 
              className="px-4 py-2 rounded-lg text-forest-green/80 font-medium hover:text-forest-green hover:bg-forest-green/5 transition-all relative group"
            >
              {t('nav.products')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 rounded-lg text-forest-green/80 font-medium hover:text-forest-green hover:bg-forest-green/5 transition-all relative group"
            >
              {t('nav.about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-lg text-forest-green/80 font-medium hover:text-forest-green hover:bg-forest-green/5 transition-all relative group"
            >
              {t('nav.contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <button 
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 text-forest-green hover:bg-forest-green/10 rounded-xl transition-all hover:scale-110"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-forest-green hover:bg-forest-green/10 rounded-xl transition-all -mr-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-forest-green/10 animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain">
            <div className="flex flex-col space-y-1">
              <a 
                href="#hero" 
                className="min-h-[48px] flex items-center px-4 py-3 rounded-lg text-forest-green/80 font-medium hover:text-forest-green hover:bg-forest-green/5 active:bg-forest-green/10 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a 
                href="#shop" 
                className="min-h-[48px] flex items-center px-4 py-3 rounded-lg text-forest-green/80 font-medium hover:text-forest-green hover:bg-forest-green/5 active:bg-forest-green/10 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.products')}
              </a>
              <a 
                href="#about" 
                className="min-h-[48px] flex items-center px-4 py-3 rounded-lg text-forest-green/80 font-medium hover:text-forest-green hover:bg-forest-green/5 active:bg-forest-green/10 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a 
                href="#contact" 
                className="min-h-[48px] flex items-center px-4 py-3 rounded-lg text-forest-green/80 font-medium hover:text-forest-green hover:bg-forest-green/5 active:bg-forest-green/10 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
              <div className="px-4 py-3 min-h-[48px] flex items-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
