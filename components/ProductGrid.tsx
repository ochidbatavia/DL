
import React from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onSelectProduct }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-base text-[#3dcd58] font-semibold tracking-wide uppercase">Produk Unggulan</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Stok Tersedia & Siap Kirim
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Daftar beberapa aparatus elektrikal yang paling sering dicari. Dapatkan penawaran harga terbaik untuk kebutuhan proyek Anda.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <div 
              key={product.sku}
              onClick={() => onSelectProduct(product)}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-square bg-gray-50 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-gray-100 p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#3dcd58] uppercase tracking-wider bg-green-50 px-2 py-0.5 rounded">
                    {product.brand}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">SKU: {product.sku}</span>
                </div>
                <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-[#3dcd58] transition-colors h-12">
                  {product.name}
                </h3>
                <div className="pt-4 flex items-center justify-between border-t border-gray-50">
                  <span className="text-xs text-gray-500 font-medium flex items-center">
                    <CheckCircle2 className="w-3 h-3 text-[#3dcd58] mr-1" /> Ready Stock
                  </span>
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-[#3dcd58] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
