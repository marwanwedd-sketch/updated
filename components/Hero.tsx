import React from 'react';
import heroBanner from '../hero-pet-shop.png';
import heroCat1 from '../hero-cat-1.jpg';
import heroDog2 from '../hero-dog-2.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import { CuteCat, CuteDog } from './PetDoodles';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-b from-warm-sand via-warm-sand to-white/50">
      {/* Hero banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 mb-10 sm:mb-12">
        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl ring-2 ring-white/40 ring-offset-2 ring-offset-warm-sand/80">
          <img
            src={heroBanner}
            alt="Happy cat and dog - Siam Pet Food"
            className="w-full h-auto object-cover max-h-[180px] sm:max-h-[220px] lg:max-h-[260px]"
          />
        </div>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-forest-green/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-3xl"></div>
        {/* Cute floating pets */}
        <div className="absolute top-24 right-16 sm:right-24 text-terracotta/25 animate-float-soft hidden sm:block" style={{ animationDelay: '0s' }}>
          <CuteCat size={48} />
        </div>
        <div className="absolute bottom-32 left-12 sm:left-20 text-forest-green/20 animate-float-soft hidden sm:block" style={{ animationDelay: '1.5s' }}>
          <CuteDog size={56} />
        </div>
        <div className="absolute top-1/3 left-8 text-forest-green/15 animate-wiggle hidden lg:block" style={{ animationDelay: '0.5s' }}>
          <CuteDog size={36} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">
          <div className="mb-8 sm:mb-12 lg:mb-0 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-gradient-to-r from-forest-green/10 to-terracotta/10 text-forest-green font-semibold text-xs sm:text-sm mb-5 sm:mb-8 tracking-wide uppercase border border-forest-green/20 backdrop-blur-sm">
              <CuteCat size={20} className="text-terracotta/80 shrink-0" />
              {t('hero.badge')}
              <CuteDog size={20} className="text-forest-green/80 shrink-0" />
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-display font-bold text-forest-green leading-[1.15] mb-5 sm:mb-8">
              {t('hero.title')}{' '}
              <span className="relative inline-block">
                <span className="text-terracotta">{t('hero.titleHighlight')}</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-terracotta/20" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path d="M0,8 Q50,2 100,5 T200,3" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </span>
              .
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-forest-green/70 mb-8 sm:mb-12 leading-relaxed max-w-xl font-light">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center bg-gradient-to-r from-terracotta to-terracotta-dark text-white px-8 py-4 sm:px-12 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-terracotta/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-[0.98] min-h-[48px]"
              >
                <span>{t('hero.messageUs')}</span>
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#shop" 
                className="inline-flex items-center justify-center bg-white text-forest-green px-8 py-4 sm:px-12 sm:py-5 rounded-full font-bold text-base sm:text-lg border-2 border-forest-green/20 hover:border-forest-green hover:shadow-lg transition-all duration-300 active:scale-[0.98] min-h-[48px]"
              >
                {t('hero.viewProducts')}
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-8 items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-forest-green/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-forest-green/70">{t('hero.certifiedOrganic')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-forest-green/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-forest-green/70">{t('hero.premiumQuality')}</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Enhanced decorative blobs */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-terracotta/20 to-terracotta/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-gradient-to-tr from-forest-green/10 to-forest-green/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            
            <div className="relative grid grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
              <div className="space-y-2 sm:space-y-4 lg:space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={heroCat1}
                    alt="Curious cat portrait"
                    className="relative rounded-2xl sm:rounded-[2.5rem] shadow-2xl transform hover:rotate-2 hover:scale-105 transition-all duration-500 w-full"
                  />
                </div>
              </div>
              <div className="pt-8 sm:pt-12 lg:pt-16 space-y-2 sm:space-y-4 lg:space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-forest-green/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={heroDog2}
                    alt="Dog enjoying a meal"
                    className="relative rounded-2xl sm:rounded-[2.5rem] shadow-2xl transform hover:-rotate-2 hover:scale-105 transition-all duration-500 w-full"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-forest-green to-forest-green/80 rounded-[2.5rem] blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-forest-green to-forest-green/90 p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-[2.5rem] text-white flex flex-col justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">100%</div>
                    <div className="text-xs sm:text-sm lg:text-base font-medium text-white/90">{t('hero.humanGrade')}</div>
                    <div className="mt-2 sm:mt-4 flex items-center gap-2 text-[10px] sm:text-xs text-white/70">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{t('hero.certifiedTested')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
