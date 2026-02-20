import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CuteDog, CuteCat, PawPrint } from './PetDoodles';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-10 sm:mb-16 relative">
          <div className="flex justify-center gap-2 mb-4 sm:mb-6">
            <PawPrint size={20} className="text-terracotta/40" />
            <PawPrint size={24} className="text-forest-green/40" />
            <PawPrint size={20} className="text-terracotta/40" />
          </div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-forest-green/10 text-forest-green font-semibold text-sm mb-4 sm:mb-6 tracking-wide uppercase">
            {t('about.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-forest-green mb-4 sm:mb-6">
            {t('about.title')}
          </h2>
          <p className="text-forest-green/70 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-1">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">
          <div className="mb-10 sm:mb-12 lg:mb-0">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-forest-green mb-4 sm:mb-6">
              {t('about.passionTitle')}
            </h3>
            <p className="text-forest-green/80 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              {t('about.passion1')}
            </p>
            <p className="text-forest-green/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {t('about.passion2')}
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-warm-sand/50 border border-forest-green/10 group/card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0 text-forest-green group-hover/card:scale-110 transition-transform">
                    <CuteDog size={28} />
                  </div>
                  <h4 className="font-bold text-forest-green">{t('about.dogs')}</h4>
                </div>
                <p className="text-forest-green/70 text-sm">
                  {t('about.dogsDesc')}
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-warm-sand/50 border border-forest-green/10 group/card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0 text-terracotta group-hover/card:scale-110 transition-transform">
                    <CuteCat size={28} />
                  </div>
                  <h4 className="font-bold text-forest-green">{t('about.cats')}</h4>
                </div>
                <p className="text-forest-green/70 text-sm">
                  {t('about.catsDesc')}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-forest-green/5 to-terracotta/5 border border-forest-green/10">
              <h4 className="font-bold text-forest-green mb-2 text-base sm:text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-terracotta shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('about.value1Title')}
              </h4>
              <p className="text-forest-green/70">
                {t('about.value1Desc')}
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-forest-green/5 to-terracotta/5 border border-forest-green/10">
              <h4 className="font-bold text-forest-green mb-2 text-base sm:text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-terracotta shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('about.value2Title')}
              </h4>
              <p className="text-forest-green/70">
                {t('about.value2Desc')}
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-forest-green/5 to-terracotta/5 border border-forest-green/10">
              <h4 className="font-bold text-forest-green mb-2 text-base sm:text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-terracotta shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('about.value3Title')}
              </h4>
              <p className="text-forest-green/70">
                {t('about.value3Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
