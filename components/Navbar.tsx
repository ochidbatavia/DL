
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, Globe, User, ArrowRight, Package, LogIn } from 'lucide-react';
import { MOCK_PRODUCTS, TRANSLATIONS } from '../constants';
import { Product } from '../types';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about') => void;
  activePage: 'home' | 'about';
  onScrollTo: (sectionId: string) => void;
  language: 'ID' | 'EN';
  onLanguageChange: (lang: 'ID' | 'EN') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage, onScrollTo, language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[language].nav;

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const filtered = MOCK_PRODUCTS.filter(
      (p) => p.name.toLowerCase().includes(query) || p.sku.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery('');
  };

  const handleNavClick = (page: 'home' | 'about', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setIsOpen(false);
  };

  const handleSectionClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    onScrollTo(sectionId);
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    onLanguageChange(language === 'ID' ? 'EN' : 'ID');
  };

  return (
    <>
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={(e) => handleNavClick('home', e)}>
                <Logo />
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a 
                  href="#" 
                  onClick={(e) => handleNavClick('home', e)}
                  className={`px-3 py-2 text-sm font-medium border-b-2 transition-all ${activePage === 'home' ? 'text-gray-900 border-red-600' : 'text-gray-600 border-transparent hover:border-red-600 hover:text-gray-900'}`}
                >
                  {t.home}
                </a>
                <a 
                  href="#products" 
                  onClick={(e) => handleSectionClick('products-section', e)}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-red-600 transition-all"
                >
                  {t.products}
                </a>
                <a 
                  href="#solutions" 
                  onClick={(e) => handleSectionClick('solutions-section', e)}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-red-600 transition-all"
                >
                  {t.solutions}
                </a>
                <a 
                  href="#" 
                  onClick={(e) => handleNavClick('about', e)}
                  className={`px-3 py-2 text-sm font-medium border-b-2 transition-all ${activePage === 'about' ? 'text-gray-900 border-red-600' : 'text-gray-600 border-transparent hover:border-red-600 hover:text-gray-900'}`}
                >
                  {t.about}
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={toggleSearch} className="text-gray-500 hover:text-red-600 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button onClick={toggleLanguage} className="text-gray-500 hover:text-red-600 flex items-center space-x-1 group p-2 hover:bg-gray-50 rounded-lg transition-all">
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="text-xs font-bold">{language}</span>
              </button>
              <div className="relative" ref={userMenuRef}>
                <button onClick={() => setShowUserMenu(!showUserMenu)} className={`p-2 rounded-full transition-colors ${showUserMenu ? 'bg-red-50 text-red-600' : 'text-gray-500 hover:text-red-600 hover:bg-gray-100'}`}>
                  <User className="w-5 h-5" />
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <LogIn className="w-4 h-4 mr-3 text-gray-400" /> {t.login}
                    </button>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button className="w-full flex items-center px-4 py-2 text-sm text-red-600 font-bold hover:bg-red-50 transition-colors">
                      {t.help}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center md:hidden">
              <button onClick={toggleSearch} className="mr-2 p-2 text-gray-400 hover:text-red-600">
                <Search className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b animate-in slide-in-from-top-4 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" onClick={(e) => handleNavClick('home', e)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">{t.home}</a>
              <a href="#products" onClick={(e) => handleSectionClick('products-section', e)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">{t.products}</a>
              <a href="#solutions" onClick={(e) => handleSectionClick('solutions-section', e)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">{t.solutions}</a>
              <a href="#" onClick={(e) => handleNavClick('about', e)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">{t.about}</a>
              <button onClick={toggleLanguage} className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between">
                <span>Bahasa ({language})</span>
                <Globe className="w-5 h-5 text-gray-400" />
              </button>
              <a href="#" className="block px-3 py-2 text-base font-bold text-red-600 hover:bg-red-50">{t.login}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-white animate-in fade-in duration-200 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-12">
              <div onClick={(e) => { handleNavClick('home', e); toggleSearch(); }} className="cursor-pointer">
                <Logo />
              </div>
              <button 
                onClick={toggleSearch}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-8 h-8 text-gray-500" />
              </button>
            </div>

            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 w-6 h-6 transition-colors" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder={t.search}
                className="w-full bg-gray-100 border-2 border-transparent focus:border-red-600 focus:bg-white rounded-2xl py-5 pl-16 pr-8 text-xl outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="mt-12">
              {searchQuery.trim() === '' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Pencarian Populer</h3>
                    <div className="space-y-3">
                      {['Schneider MCCB', 'Contactor 220V', 'Mitsubishi PLC', 'MCB 1 Phase'].map((term) => (
                        <button 
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="flex items-center text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 mr-2" /> {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-8 border-b pb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      Hasil Pencarian <span className="text-gray-400 font-normal">({filteredProducts.length})</span>
                    </h3>
                  </div>

                  {filteredProducts.length > 0 ? (
                    <div className="grid gap-4">
                      {filteredProducts.map((product) => (
                        <div key={product.sku} className="flex items-center p-4 bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:border-red-600 transition-all cursor-pointer group">
                          <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="ml-6 flex-1">
                            <div className="flex items-center text-xs font-bold text-red-600 mb-1">
                              <Package className="w-3 h-3 mr-1" /> {product.brand}
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">{product.name}</h4>
                            <div className="text-sm text-gray-500 font-mono mt-1">SKU: <span className="font-bold text-gray-700">{product.sku}</span></div>
                          </div>
                          <ArrowRight className="w-6 h-6 text-gray-300 ml-6 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20">
                      <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search className="w-10 h-10 text-gray-300" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Produk Tidak Ditemukan</h4>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
