import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.badge': '✨ Premium Pet Nutrition',
    'hero.title': 'Elite Nutrition for Your',
    'hero.titleHighlight': 'Loyal Companion',
    'hero.description': 'Specially formulated organic recipes and premium ingredients delivered directly to you. Because superior health starts with what\'s in their bowl.',
    'hero.messageUs': 'Message Us',
    'hero.viewProducts': 'View Products',
    'hero.certifiedOrganic': 'Certified Organic',
    'hero.premiumQuality': 'Premium Quality',
    'hero.humanGrade': 'Human-Grade Ingredients',
    'hero.certifiedTested': 'Certified & Tested',
    
    // About
    'about.badge': 'Our Story',
    'about.title': 'About Siam Pet Food',
    'about.subtitle': 'Dedicated to crafting premium nutrition for cats and dogs since day one.',
    'about.passionTitle': 'Passion for Pet Nutrition',
    'about.passion1': 'Siam Pet Food was founded with a simple mission: to provide cats and dogs with the highest quality, nutrient-rich food they deserve. We believe that every pet—whether feline or canine—deserves meals made from human-grade ingredients, formulated by experts who understand their unique nutritional needs.',
    'about.passion2': 'Based in Thailand, we combine traditional wisdom with modern science to create recipes that support healthy coats, strong immune systems, and long, happy lives. From playful kittens to senior dogs, our products are designed to meet the dietary requirements of pets at every stage of life.',
    'about.dogs': 'Dogs',
    'about.dogsDesc': 'Premium formulas for all breeds and life stages',
    'about.cats': 'Cats',
    'about.catsDesc': 'Wholesome recipes tailored to feline needs',
    'about.value1Title': '100% Human-Grade Ingredients',
    'about.value1Desc': 'We source only the finest ingredients—the same quality you would serve at your own table. No fillers, no artificial preservatives.',
    'about.value2Title': 'Expertly Formulated',
    'about.value2Desc': 'Every recipe is developed by nutritionists to meet AAFCO standards and support optimal health for both cats and dogs.',
    'about.value3Title': 'Made with Love in Thailand',
    'about.value3Desc': 'Proudly manufactured in Thailand, we bring together local expertise and global quality standards.',
    
    // Products
    'products.badge': 'Our Collection',
    'products.title': 'Premium Pet Nutrition Products',
    'products.subtitle': 'Discover our carefully curated selection of premium pet food products, crafted with love and the finest ingredients for your furry friends.',
    'products.lookingFor': 'Looking for something specific?',
    'products.contactUs': 'Contact Us',
    'products.viewDetails': 'View Details',
    // Product names
    'product.chickenSalmon': 'Chicken & Salmon',
    
    // Contact
    'contact.badge': 'Contact Us',
    'contact.title': 'We\'d Love to Hear From You',
    'contact.subtitle': 'Have questions about our nutrition plans or need help choosing the right recipe for your pet? Our team is here for you.',
    'contact.emailSupport': 'Email Support',
    'contact.general': 'General:',
    'contact.orders': 'Orders:',
    'contact.phone': 'Phone:',
    'contact.flagshipStore': 'Our Flagship Store',
    'contact.storeHours': 'Store Hours',
    'contact.monFri': 'Mon - Fri:',
    'contact.satSun': 'Sat - Sun:',
    'contact.sendMessage': 'Send Us a Message',
    'contact.fullName': 'Full Name',
    'contact.email': 'Email Address',
    'contact.petType': 'Pet Type',
    'contact.petTypeDog': '🐕 Dog',
    'contact.petTypeCat': '🐱 Cat',
    'contact.petTypeOther': '🐾 Other',
    'contact.howCanWeHelp': 'How can we help?',
    'contact.messagePlaceholder': 'Tell us about your pet\'s needs...',
    'contact.sendButton': 'Send Message',
    
    // Footer
    'footer.tagline': 'Empowering pet parents with premium, sustainable, and reliable nutrition. Your pet\'s health is our heartbeat.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us',
    'footer.copyright': '© 2026 Siam Pet Food. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookie': 'Cookie Policy',
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.badge': '✨ تغذية متميزة للحيوانات الأليفة',
    'hero.title': 'تغذية متميزة لرفيقك',
    'hero.titleHighlight': 'الوفي',
    'hero.description': 'وصفات عضوية مصممة خصيصاً ومكونات عالية الجودة تُسلم مباشرة إليك. لأن الصحة المثلى تبدأ بما في وعاء طعامهم.',
    'hero.messageUs': 'راسلنا',
    'hero.viewProducts': 'عرض المنتجات',
    'hero.certifiedOrganic': 'معتمد عضوي',
    'hero.premiumQuality': 'جودة متميزة',
    'hero.humanGrade': 'مكونات صالحة للاستهلاك البشري',
    'hero.certifiedTested': 'معتمد ومختبر',
    
    // About
    'about.badge': 'قصتنا',
    'about.title': 'عن سيام للحيوانات الأليفة',
    'about.subtitle': 'ملتزمون بصنع تغذية متميزة للقطط والكلاب منذ اليوم الأول.',
    'about.passionTitle': 'شغف بتغذية الحيوانات الأليفة',
    'about.passion1': 'تأسست سيام للحيوانات الأليفة بمهمة بسيطة: توفير أعلى جودة من الطعام الغني بالعناصر الغذائية للقطط والكلاب التي يستحقونها. نؤمن بأن كل حيوان أليف—سواء كان قطاً أو كلباً—يستحق وجبات مصنوعة من مكونات صالحة للاستهلاك البشري، مصممة من قبل خبراء يفهمون احتياجاتهم الغذائية الفريدة.',
    'about.passion2': 'مقيمون في تايلاند، نجمع بين الحكمة التقليدية والعلوم الحديثة لإنشاء وصفات تدعم المعاطف الصحية، وأجهزة المناعة القوية، وحياة طويلة وسعيدة. من القطط المرحة إلى الكلاب المسنة، تم تصميم منتجاتنا لتلبية المتطلبات الغذائية للحيوانات الأليفة في كل مرحلة من مراحل الحياة.',
    'about.dogs': 'الكلاب',
    'about.dogsDesc': 'صيغ متميزة لجميع السلالات ومراحل الحياة',
    'about.cats': 'القطط',
    'about.catsDesc': 'وصفات صحية مصممة خصيصاً لاحتياجات القطط',
    'about.value1Title': '100% مكونات صالحة للاستهلاك البشري',
    'about.value1Desc': 'نستورد فقط أفضل المكونات—نفس الجودة التي تقدمها على مائدتك. لا حشوات، لا مواد حافظة اصطناعية.',
    'about.value2Title': 'مصممة بخبرة',
    'about.value2Desc': 'كل وصفة مطورة من قبل أخصائيي التغذية لتلبية معايير AAFCO ودعم الصحة المثلى للقطط والكلاب.',
    'about.value3Title': 'مصنوع بحب في تايلاند',
    'about.value3Desc': 'مصنوع بفخر في تايلاند، نجمع بين الخبرة المحلية ومعايير الجودة العالمية.',
    
    // Products
    'products.badge': 'مجموعتنا',
    'products.title': 'منتجات تغذية متميزة للحيوانات الأليفة',
    'products.subtitle': 'اكتشف مجموعتنا المختارة بعناية من منتجات طعام الحيوانات الأليفة المتميزة، المصنوعة بحب وأفضل المكونات لأصدقائك ذوي الفراء.',
    'products.lookingFor': 'تبحث عن شيء محدد؟',
    'products.contactUs': 'اتصل بنا',
    'products.viewDetails': 'عرض التفاصيل',
    // Product names
    'product.chickenSalmon': 'دجاج وسمك السلمون',
    
    // Contact
    'contact.badge': 'اتصل بنا',
    'contact.title': 'نود أن نسمع منك',
    'contact.subtitle': 'لديك أسئلة حول خطط التغذية لدينا أو تحتاج مساعدة في اختيار الوصفة المناسبة لحيوانك الأليف؟ فريقنا هنا لمساعدتك.',
    'contact.emailSupport': 'دعم البريد الإلكتروني',
    'contact.general': 'عام:',
    'contact.orders': 'الطلبات:',
    'contact.phone': 'هاتف:',
    'contact.flagshipStore': 'متجرنا الرئيسي',
    'contact.storeHours': 'ساعات العمل',
    'contact.monFri': 'الاثنين - الجمعة:',
    'contact.satSun': 'السبت - الأحد:',
    'contact.sendMessage': 'أرسل لنا رسالة',
    'contact.fullName': 'الاسم الكامل',
    'contact.email': 'عنوان البريد الإلكتروني',
    'contact.petType': 'نوع الحيوان الأليف',
    'contact.petTypeDog': '🐕 كلب',
    'contact.petTypeCat': '🐱 قط',
    'contact.petTypeOther': '🐾 آخر',
    'contact.howCanWeHelp': 'كيف يمكننا المساعدة؟',
    'contact.messagePlaceholder': 'أخبرنا عن احتياجات حيوانك الأليف...',
    'contact.sendButton': 'إرسال الرسالة',
    
    // Footer
    'footer.tagline': 'تمكين آباء الحيوانات الأليفة بتغذية متميزة ومستدامة وموثوقة. صحة حيوانك الأليف هي نبض قلبنا.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contactUs': 'اتصل بنا',
    'footer.copyright': '© 2026 سيام للحيوانات الأليفة. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookie': 'سياسة ملفات تعريف الارتباط',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};
