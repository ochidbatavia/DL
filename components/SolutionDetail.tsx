
import React from 'react';
import { Solution } from '../types';
import { TRANSLATIONS } from '../constants';
import { ArrowLeft, CheckCircle2, PhoneCall, ChevronRight } from 'lucide-react';

interface SolutionDetailProps {
  solution: Solution;
  onBack: () => void;
  language: 'ID' | 'EN';
}

const SolutionDetail: React.FC<SolutionDetailProps> = ({ solution, onBack, language }) => {
  const t = TRANSLATIONS[language].solutions;

  const handleContactExpert = () => {
    const message = `Halo Djaja Listrik, saya ingin berkonsultasi mengenai solusi:\n\n*${solution.title}*\n\nMohon bantuannya. Terima kasih.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628881351844?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
            <button onClick={onBack} className="hover:text-red-600 transition-colors">{TRANSLATIONS[language].nav.home}</button>
            <ChevronRight size={12} />
            <span className="text-red-600">{TRANSLATIONS[language].nav.solutions}</span>
            <ChevronRight size={12} />
            <span className="text-gray-900 truncate">{solution.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={solution.image} 
          alt={solution.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white">
              <button 
                onClick={onBack}
                className="inline-flex items-center text-sm font-bold opacity-80 hover:opacity-100 transition-opacity mb-6"
              >
                <ArrowLeft size={16} className="mr-2" /> {t.back}
              </button>
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-600 rounded-xl">
                  {React.cloneElement(solution.icon as React.ReactElement, { className: 'w-6 h-6 text-white' })}
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-red-500">
                  Industrial Solution
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{solution.title}</h1>
              <p className="text-lg opacity-90 leading-relaxed">
                {solution.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                  {language === 'ID' ? 'Ringkasan Solusi' : 'Solution Overview'}
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p>{solution.longDescription}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {language === 'ID' ? 'Karakteristik Utama' : 'Key Characteristics'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {solution.features?.map((feature, i) => (
                    <div key={i} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <CheckCircle2 size={20} className="text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <PhoneCall size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{t.ctaTitle}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {t.ctaDesc}
                  </p>
                  <div className="space-y-4">
                    <button 
                      onClick={handleContactExpert}
                      className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center"
                    >
                      <PhoneCall size={18} className="mr-2" /> {t.ctaBtn}
                    </button>
                    <button className="w-full bg-white/10 text-white py-4 rounded-xl font-bold hover:bg-white/20 transition-colors">
                      {language === 'ID' ? 'Download Katalog Teknis' : 'Download Technical Catalog'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetail;
