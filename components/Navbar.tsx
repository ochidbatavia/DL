
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, Globe, User, ArrowRight, Package } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

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

  return (
    <>
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Logo />
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#3dcd58] transition-all">Produk</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#3dcd58] transition-all">Solusi</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#3dcd58] transition-all">Layanan</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-[#3dcd58] transition-all">Dukungan</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={toggleSearch}
                className="text-gray-500 hover:text-[#3dcd58] p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <button className="text-gray-500 hover:text-[#3dcd58] flex items-center space-x-1">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-semibold">ID</span>
              </button>
              <button className="text-gray-500 hover:text-[#3dcd58]">
                <User className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center md:hidden">
              <button 
                onClick={toggleSearch}
                className="mr-2 p-2 text-gray-400 hover:text-[#3dcd58]"
              >
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
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Produk</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Solusi</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Layanan</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Dukungan</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Tentang Kami</a>
            </div>
          </div>
        )}
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-white animate-in fade-in duration-200 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-12">
              <Logo />
              <button 
                onClick={toggleSearch}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-8 h-8 text-gray-500" />
              </button>
            </div>

            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3dcd58] w-6 h-6 transition-colors" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Cari Produk (Contoh: NSX100 atau Contactor)..."
                className="w-full bg-gray-100 border-2 border-transparent focus:border-[#3dcd58] focus:bg-white rounded-2xl py-5 pl-16 pr-8 text-xl outline-none transition-all"
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
                          className="flex items-center text-lg font-medium text-gray-700 hover:text-[#3dcd58] transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 mr-2" /> {term}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Kategori Utama</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Distribution', 'Automation', 'Protection', 'Control', 'Measurement'].map((cat) => (
                        <span key={cat} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-600 hover:bg-[#3dcd58] hover:text-white cursor-pointer transition-colors">
                          {cat}
                        </span>
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
                        <div key={product.sku} className="flex items-center p-4 bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:border-[#3dcd58] transition-all cursor-pointer group">
                          <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="ml-6 flex-1">
                            <div className="flex items-center text-xs font-bold text-[#3dcd58] mb-1">
                              <Package className="w-3 h-3 mr-1" /> {product.brand}
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#3dcd58] transition-colors">{product.name}</h4>
                            <div className="text-sm text-gray-500 font-mono mt-1">SKU: <span className="font-bold text-gray-700">{product.sku}</span></div>
                          </div>
                          <div className="hidden sm:block">
                            <span className="px-3 py-1 bg-green-50 text-[#3dcd58] rounded text-xs font-bold uppercase tracking-wider">In Stock</span>
                          </div>
                          <ArrowRight className="w-6 h-6 text-gray-300 ml-6 group-hover:text-[#3dcd58] group-hover:translate-x-1 transition-all" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20">
                      <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search className="w-10 h-10 text-gray-300" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Produk Tidak Ditemukan</h4>
                      <p className="text-gray-500">Coba kata kunci lain atau periksa kembali nomor SKU Anda.</p>
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
