
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import ProductGrid from './components/ProductGrid';
import ProductSupportAI from './components/ProductSupportAI';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ProductDetail from './components/ProductDetail';
import SolutionDetail from './components/SolutionDetail';
import { Product, Solution } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'product-detail' | 'solution-detail'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [language, setLanguage] = useState<'ID' | 'EN'>('ID');

  const t = TRANSLATIONS[language];

  useEffect(() => {
    if (currentPage !== 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage, selectedProduct, selectedSolution]);

  const navigateTo = (page: 'home' | 'about') => {
    setCurrentPage(page);
    setSelectedProduct(null);
    setSelectedSolution(null);
  };

  const handleScrollTo = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setSelectedProduct(null);
      setSelectedSolution(null);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const openSolutionDetail = (solution: Solution) => {
    setSelectedSolution(solution);
    setCurrentPage('solution-detail');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onNavigate={navigateTo} 
        activePage={currentPage === 'product-detail' || currentPage === 'solution-detail' ? 'home' : currentPage} 
        onScrollTo={handleScrollTo}
        language={language}
        onLanguageChange={setLanguage}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero 
              language={language} 
              onCatalogClick={() => handleScrollTo('products-section')}
            />
            
            <div className="bg-white py-12 border-b border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wide mb-8">
                  {language === 'ID' ? 'Penyedia Resmi Merek Global Terkemuka' : 'Official Provider of Leading Global Brands'}
                </p>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 opacity-50 grayscale hover:grayscale-0 transition-all">
                  {['SCHNEIDER', 'ABB', 'SIEMENS', 'OMRON', 'MITSUBISHI', 'CHINT'].map(brand => (
                    <div key={brand} className="flex justify-center items-center font-bold text-2xl text-gray-800">{brand}</div>
                  ))}
                </div>
              </div>
            </div>

            <div id="solutions-section">
              <Solutions language={language} onSelectSolution={openSolutionDetail} />
            </div>

            <div id="products-section">
              <ProductGrid onSelectProduct={openProductDetail} />
            </div>

            <section className="bg-red-600 py-20 text-white overflow-hidden relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:flex items-center justify-between">
                  <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <h2 className="text-4xl font-extrabold mb-6">
                      {language === 'ID' ? 'Gudang Logistik Pusat DJAJA LISTRIK' : 'DJAJA LISTRIK Central Logistics Warehouse'}
                    </h2>
                    <p className="text-xl opacity-90 mb-8 leading-relaxed">
                      {language === 'ID' 
                        ? 'Dengan manajemen inventaris digital, kami memastikan setiap pesanan komponen elektrikal Anda diproses dengan akurasi tinggi dan siap kirim.' 
                        : 'With digital inventory management, we ensure every order of your electrical components is processed with high accuracy and ready for shipment.'}
                    </p>
                    <button 
                      onClick={() => handleScrollTo('products-section')}
                      className="bg-white text-red-600 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
                    >
                      {language === 'ID' ? 'Kunjungi Virtual Warehouse' : 'Visit Virtual Warehouse'}
                    </button>
                  </div>
                  <div className="lg:w-1/3 flex justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" 
                      alt="Logistics" 
                      className="rounded-3xl shadow-2xl relative z-10 w-72 h-72 object-cover border-4 border-white/30"
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === 'about' && <AboutUs />}
        
        {currentPage === 'product-detail' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => navigateTo('home')} 
            onProductSelect={openProductDetail}
          />
        )}

        {currentPage === 'solution-detail' && selectedSolution && (
          <SolutionDetail 
            solution={selectedSolution} 
            onBack={() => navigateTo('home')} 
            language={language}
          />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      <ProductSupportAI />
    </div>
  );
};

export default App;
