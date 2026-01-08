
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    title: 'Otomasi Industri',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=400&q=80',
    count: '1,200+ Produk'
  },
  {
    title: 'Manajemen Energi',
    image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=400&q=80',
    count: '850+ Produk'
  },
  {
    title: 'Komponen Distribusi',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=400&q=80',
    count: '2,500+ Produk'
  },
  {
    title: 'Infrastruktur Gedung',
    image: 'https://images.unsplash.com/photo-1621905252507-b35242fdb600?auto=format&fit=crop&w=400&q=80',
    count: '1,100+ Produk'
  },
  {
    title: 'Energi Terbarukan',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=400&q=80',
    count: '400+ Produk'
  },
  {
    title: 'Keamanan Sistem',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    count: '600+ Produk'
  }
];

const ProductCategories: React.FC = () => {
  return (
    <section id="categories-section" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Katalog Produk</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Telusuri Berdasarkan Kategori
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Temukan ribuan komponen elektrikal berkualitas tinggi yang tersedia di stok kami, siap untuk dikirim segera.
            </p>
          </div>
          <button className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            Lihat Semua Kategori <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category, index) => (
            <div 
              key={index} 
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={category.image} 
                alt={category.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-red-600/20 backdrop-blur-md text-red-500 text-[10px] font-bold uppercase rounded mb-2 border border-red-600/30">
                  {category.count}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <div className="flex items-center text-red-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lihat Produk <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
