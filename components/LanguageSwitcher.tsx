import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { 
      code: 'en' as const, 
      name: 'English', 
      flag: '🇬🇧',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    { 
      code: 'ar' as const, 
      name: 'العربية', 
      flag: '🇸🇦',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
  ];

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="relative" dir="ltr">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-forest-green hover:bg-forest-green/10 transition-all duration-200 group"
        aria-label="Change language"
      >
        {/* Globe/Language Icon */}
        <svg 
          className="w-5 h-5 text-forest-green group-hover:text-terracotta transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden sm:inline font-medium text-sm">{currentLang.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className={`absolute top-full mt-2 bg-white rounded-xl shadow-xl border border-forest-green/10 overflow-hidden z-50 min-w-[160px] ${dir === 'rtl' ? 'left-0' : 'right-0'}`}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-forest-green/5 transition-colors group ${
                  language === lang.code ? 'bg-forest-green/10 font-semibold' : ''
                }`}
              >
                {/* Flag Icon */}
                <div className="w-6 h-6 rounded flex items-center justify-center bg-gradient-to-br from-white to-gray-50 border border-forest-green/10 shadow-sm">
                  <span className="text-base leading-none">{lang.flag}</span>
                </div>
                {/* Language Icon */}
                <div className="text-forest-green/60 group-hover:text-forest-green transition-colors">
                  {lang.icon}
                </div>
                <span className="text-sm text-forest-green flex-1">{lang.name}</span>
                {language === lang.code && (
                  <svg className={`w-4 h-4 text-terracotta ${dir === 'rtl' ? 'mr-auto' : 'ml-auto'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
