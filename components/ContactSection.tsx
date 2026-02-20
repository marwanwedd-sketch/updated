import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PawPrint, CuteDog, CuteCat } from './PetDoodles';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    petType: 'dog',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out to Siam Pet Food. We\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-warm-sand via-white to-warm-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex justify-center gap-2 mb-4">
            <CuteDog size={28} className="text-forest-green/30" />
            <CuteCat size={28} className="text-terracotta/30" />
          </div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-terracotta/10 text-terracotta font-semibold text-sm mb-4 sm:mb-6 tracking-wide uppercase">
            {t('contact.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-forest-green mb-4 sm:mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-forest-green/70 max-w-2xl mx-auto px-1">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20">
          
          <div className="mb-10 sm:mb-16 lg:mb-0 space-y-4 sm:space-y-8">
            
            <div className="space-y-4 sm:space-y-6">
              <div className="group flex items-start p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-forest-green/5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-terracotta/10 to-terracotta/5 rounded-xl sm:rounded-2xl flex items-center justify-center text-terracotta shadow-sm shrink-0 mr-4 sm:mr-5 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-forest-green mb-2 text-lg">{t('contact.emailSupport')}</h4>
                  <p className="text-forest-green/70 leading-relaxed">
                    <span className="font-semibold text-forest-green">{t('contact.general')}</span>{' '}
                    <a href="mailto:info@siam-petfood.com" className="hover:text-terracotta transition-colors">info@siam-petfood.com</a>
                    <br />
                    <span className="font-semibold text-forest-green">{t('contact.orders')}</span>{' '}
                    <a href="mailto:sales@siam-petfood.com" className="hover:text-terracotta transition-colors">sales@siam-petfood.com</a>
                    <br />
                    <span className="font-semibold text-forest-green">{t('contact.phone')}</span>{' '}
                    <a href="tel:+66989173012" className="hover:text-terracotta transition-colors">+66989173012</a>
                  </p>
                </div>
              </div>

              <div className="group flex items-start p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-forest-green/5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-forest-green/10 to-forest-green/5 rounded-xl sm:rounded-2xl flex items-center justify-center text-forest-green shadow-sm shrink-0 mr-4 sm:mr-5 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-forest-green mb-2 text-lg">{t('contact.flagshipStore')}</h4>
                  <p className="text-forest-green/70 leading-relaxed">
                    THE PRETIUM BANGNA 91/7 Bangna-Trad Rd.<br />
                    Bangkaew, Bangphli, Samut Prakan 10540, Thailand
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-forest-green/5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-terracotta/10 to-forest-green/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-forest-green shadow-sm shrink-0 mr-4 sm:mr-5 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-forest-green mb-2 text-lg">{t('contact.storeHours')}</h4>
                  <p className="text-forest-green/70 leading-relaxed">
                    {t('contact.monFri')} <span className="font-semibold">9am - 8pm</span><br />
                    {t('contact.satSun')} <span className="font-semibold">10am - 6pm</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-warm-sand/30 p-5 sm:p-8 lg:p-14 rounded-2xl sm:rounded-[3rem] shadow-2xl border border-forest-green/10">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-forest-green mb-6 sm:mb-8 text-center">{t('contact.sendMessage')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-bold text-forest-green mb-3 px-1">{t('contact.fullName')}</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-white border-2 border-forest-green/10 rounded-xl sm:rounded-2xl py-3.5 sm:py-4 px-4 sm:px-6 focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all placeholder:text-forest-green/30 text-base min-h-[48px]"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-forest-green mb-3 px-1">{t('contact.email')}</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white border-2 border-forest-green/10 rounded-xl sm:rounded-2xl py-3.5 sm:py-4 px-4 sm:px-6 focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all placeholder:text-forest-green/30 text-base min-h-[48px]"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-forest-green mb-3 px-1">{t('contact.petType')}</label>
                <select 
                  className="w-full bg-white border-2 border-forest-green/10 rounded-xl sm:rounded-2xl py-3.5 sm:py-4 px-4 sm:px-6 focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all text-forest-green text-base min-h-[48px]"
                  value={formData.petType}
                  onChange={e => setFormData({...formData, petType: e.target.value})}
                >
                  <option value="dog">{t('contact.petTypeDog')}</option>
                  <option value="cat">{t('contact.petTypeCat')}</option>
                  <option value="other">{t('contact.petTypeOther')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-forest-green mb-3 px-1">{t('contact.howCanWeHelp')}</label>
                <textarea 
                  rows={5}
                  required
                  placeholder={t('contact.messagePlaceholder')}
                  className="w-full bg-white border-2 border-forest-green/10 rounded-xl sm:rounded-2xl py-3.5 sm:py-4 px-4 sm:px-6 focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all resize-none placeholder:text-forest-green/30 text-base min-h-[120px]"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-terracotta to-terracotta-dark text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-terracotta/30 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 min-h-[52px] touch-manipulation"
              >
                <span>{t('contact.sendButton')}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
