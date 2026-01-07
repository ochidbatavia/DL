
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';
import { X, Package, ShieldCheck, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

const ProductGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-square bg-gray-50 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full z-10 transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-gray-50 flex items-center justify-center">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full max-w-sm rounded-2xl shadow-lg mix-blend-multiply"
                />
              </div>
              <div className="p-8 md:p-12 space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-[#3dcd58] text-white text-xs font-bold rounded-full">
                      {selectedProduct.brand}
                    </span>
                    <span className="text-sm font-medium text-gray-400">
                      Kategori: {selectedProduct.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                    {selectedProduct.name}
                  </h2>
                  <p className="mt-4 text-gray-500 text-lg">
                    Komponen elektrikal orisinal dengan jaminan keaslian dan performa standar internasional.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-100">
                  <div className="flex items-start space-x-3">
                    <Package className="w-5 h-5 text-[#3dcd58] mt-1" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Nomor SKU</p>
                      <p className="font-mono font-bold text-gray-900">{selectedProduct.sku}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="w-5 h-5 text-[#3dcd58] mt-1" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Garansi</p>
                      <p className="font-bold text-gray-900">12 Bulan Resmi</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                   <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Truck className="w-4 h-4 text-blue-500" />
                      <span>Estimasi Pengiriman: 1-2 Hari Kerja (JABODETABEK)</span>
                   </div>
                   <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#3dcd58]" />
                      <span>Kondisi: Baru (Brand New In Box)</span>
                   </div>
                </div>

                <div className="pt-6">
                  <button className="w-full bg-[#3dcd58] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#34b14b] shadow-lg shadow-green-200 transition-all active:scale-[0.98]">
                    Minta Penawaran Harga (Quotation)
                  </button>
                  <p className="text-center text-sm text-gray-400 mt-4">
                    Hubungi tim sales kami untuk ketersediaan jumlah besar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
