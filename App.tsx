
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import ProductCategories from './components/ProductCategories';
import ProductGrid from './components/ProductGrid';
import SustainabilityAssistant from './components/SustainabilityAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Partnership / Logo Strip */}
        <div className="bg-white py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wide mb-8">
              Penyedia Resmi Merek Global Terkemuka
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="flex justify-center items-center font-bold text-2xl text-gray-800">SCHNEIDER</div>
              <div className="flex justify-center items-center font-bold text-2xl text-gray-800">ABB</div>
              <div className="flex justify-center items-center font-bold text-2xl text-gray-800">SIEMENS</div>
              <div className="flex justify-center items-center font-bold text-2xl text-gray-800">OMRON</div>
              <div className="flex justify-center items-center font-bold text-2xl text-gray-800">MITSUBISHI</div>
              <div className="flex justify-center items-center font-bold text-2xl text-gray-800">CHINT</div>
            </div>
          </div>
        </div>

        <Solutions />

        <ProductCategories />

        <ProductGrid />

        {/* Brand Focus Section */}
        <section className="bg-[#3dcd58] py-20 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h2 className="text-4xl font-extrabold mb-6">Gudang Logistik Pusat DJAJA LISTRIK</h2>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  Dengan manajemen inventaris digital, kami memastikan setiap pesanan komponen elektrikal Anda diproses dengan akurasi tinggi dan siap kirim dalam waktu singkat.
                </p>
                <button className="bg-white text-[#3dcd58] px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
                  Kunjungi Virtual Warehouse
                </button>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                    <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" 
                        alt="Logistics Center" 
                        className="rounded-3xl shadow-2xl relative z-10 w-72 h-72 object-cover border-4 border-white/30"
                    />
                </div>
              </div>
            </div>
          </div>
          {/* Background pattern */}
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </section>

        {/* Success Stories / News */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Info Produk & Kedatangan Barang</h2>
                <p className="mt-2 text-gray-500">Update rutin mengenai ketersediaan stok komponen populer.</p>
              </div>
              <a href="#" className="hidden sm:block text-[#3dcd58] font-semibold hover:underline">Lihat Semua Update →</a>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Restock: Schneider Compact NSX Series",
                  date: "15 Jan 2024",
                  cat: "Kedatangan Barang",
                  img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=600&q=80"
                },
                {
                  title: "Penawaran Khusus Panel Inverter Danfoss",
                  date: "10 Jan 2024",
                  cat: "Promo",
                  img: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=600&q=80"
                },
                {
                  title: "Pelatihan Perawatan Circuit Breaker LV",
                  date: "02 Jan 2024",
                  cat: "Edukasi",
                  img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                }
              ].map((news, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-xl mb-4 h-48">
                    <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-bold text-[#3dcd58] uppercase">{news.cat}</span>
                  <h3 className="text-lg font-bold mt-2 group-hover:text-[#3dcd58] transition-colors">{news.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{news.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SustainabilityAssistant />
    </div>
  );
};

export default App;
