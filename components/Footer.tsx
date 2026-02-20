import React from 'react';
import webLogo from '../web_logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import { PawPrint } from './PetDoodles';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const socialLinks = [
    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
    { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  ];

  return (
    <footer className="bg-gradient-to-b from-forest-green to-forest-green/95 text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        {/* Paw trail */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 opacity-20">
          <PawPrint size={14} className="text-white" />
          <PawPrint size={12} className="text-white -rotate-12" />
          <PawPrint size={14} className="text-white rotate-6" />
          <PawPrint size={12} className="text-white -rotate-6" />
          <PawPrint size={14} className="text-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 xl:gap-16 mb-10 sm:mb-16">
          {/* Brand section */}
          <div className="max-w-sm">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl overflow-hidden flex items-center justify-center shadow-lg shrink-0">
                <img src={webLogo} alt="Siam Pet Food logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl sm:text-2xl font-display font-bold">Siam Pet Food</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
              {t('footer.tagline')}
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  className="group min-h-[44px] min-w-[44px] w-12 h-12 bg-white/10 hover:bg-terracotta rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 fill-current text-white group-hover:text-white" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#hero" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group py-1.5 min-h-[44px] items-center">
                  <span className="w-1.5 h-1.5 bg-terracotta rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#shop" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group py-1.5 min-h-[44px] items-center">
                  <span className="w-1.5 h-1.5 bg-terracotta rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group py-1.5 min-h-[44px] items-center">
                  <span className="w-1.5 h-1.5 bg-terracotta rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.contactUs')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group py-1.5 min-h-[44px] items-center">
                  <span className="w-1.5 h-1.5 bg-terracotta rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('nav.about')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">{t('footer.contactUs')}</h4>
            <div className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-terracotta mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="space-y-1">
                  <a href="mailto:info@siam-petfood.com" className="hover:text-white transition-colors block">info@siam-petfood.com</a>
                  <a href="mailto:sales@siam-petfood.com" className="hover:text-white transition-colors block">sales@siam-petfood.com</a>
                  <a href="tel:+66989173012" className="hover:text-white transition-colors block">+66989173012</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-terracotta mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>
                  THE PRETIUM BANGNA 91/7 Bangna-Trad Rd.<br />
                  Bangkaew, Bangphli, Samut Prakan 10540, Thailand
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-white/50 space-y-4 md:space-y-0 gap-4">
          <p className="text-center md:text-left">{t('footer.copyright')}</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-end">
            <a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">{t('footer.cookie')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
