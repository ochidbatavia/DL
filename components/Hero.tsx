
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  language: 'ID' | 'EN';
  onCatalogClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ language, onCatalogClick }) => {
  const t = TRANSLATIONS[language].hero;
  const whatsappUrl = "https://wa.me/628881351844?text=Halo%20Djaja%20Listrik,%20saya%20tertarik%20untuk%20konsultasi%20produk%20listrik.";

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{t.slogan}</span>{' '}
                <span className="block text-red-600 xl:inline text-3xl md:text-4xl lg:text-5xl mt-2 leading-tight">
                  {t.subSlogan}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {t.desc}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button 
                    onClick={onCatalogClick}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    {t.btnCatalog}
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-red-50 hover:bg-red-100 md:py-4 md:text-lg md:px-10"
                  >
                    {t.btnSales} <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80" alt="Warehouse" />
      </div>
    </div>
  );
};

export default Hero;
