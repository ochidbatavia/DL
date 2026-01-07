
import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { MOCK_PRODUCTS } from '../constants';
import { 
  ArrowLeft, 
  ShoppingCart, 
  FileText, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  Package, 
  Download,
  Info,
  List,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onProductSelect: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onProductSelect }) => {
  const [activeTab, setActiveTab] = useState<'desc' | 'spec' | 'doc'>('desc');
  const [addedToCart, setAddedToCart] = useState(false);

  const relatedProducts = useMemo(() => {
    return MOCK_PRODUCTS
      .filter(p => p.category === product.category && p.sku !== product.sku)
      .slice(0, 4);
  }, [product.category, product.sku]);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
            <button onClick={onBack} className="hover:text-[#3dcd58] transition-colors">Beranda</button>
            <ChevronRight size={12} />
            <span className="text-[#3dcd58]">{product.category}</span>
            <ChevronRight size={12} />
            <span className="text-gray-900 truncate">{product.name}</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={onBack}
          className="flex items-center text-sm font-bold text-gray-500 hover:text-[#3dcd58] mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Kembali ke Katalog
        </button>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 items-start">
          {/* Product Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center p-8">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl bg-gray-50 border border-gray-100 cursor-pointer hover:border-[#3dcd58] transition-all"></div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 lg:mt-0 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-[#3dcd58] text-white text-[10px] font-bold uppercase rounded-full tracking-widest shadow-sm shadow-green-200">
                  {product.brand}
                </span>
                <span className="text-sm font-semibold text-gray-400">SKU: {product.sku}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                {product.name}
              </h1>
              <div className="mt-4 flex items-center space-x-4">
                 <div className="flex items-center text-[#3dcd58]">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-400 font-medium">(42 Ulasan)</span>
                 </div>
                 <div className="h-4 w-px bg-gray-200"></div>
                 <span className="text-sm text-[#3dcd58] font-bold flex items-center">
                    <CheckCircle2 size={14} className="mr-1" /> Tersedia di Stok
                 </span>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Aksi Cepat</div>
              <div className="space-y-4">
                <button 
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
                    addedToCart ? 'bg-gray-900 text-white' : 'bg-[#3dcd58] text-white hover:bg-[#34b14b] shadow-lg shadow-green-200 active:scale-95'
                  }`}
                >
                  {addedToCart ? (
                    <>Berhasil Ditambahkan!</>
                  ) : (
                    <><ShoppingCart size={20} className="mr-2" /> Tambah ke Keranjang</>
                  )}
                </button>
                <button className="w-full py-4 rounded-xl font-bold text-lg text-gray-700 bg-white border-2 border-gray-200 hover:border-[#3dcd58] hover:text-[#3dcd58] transition-all flex items-center justify-center">
                  <FileText size={20} className="mr-2" /> Minta Penawaran Harga
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Truck size={18} className="text-[#3dcd58]" />
                  <span>Pengiriman Cepat</span>
               </div>
               <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <ShieldCheck size={18} className="text-[#3dcd58]" />
                  <span>Garansi Resmi</span>
               </div>
               <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Package size={18} className="text-[#3dcd58]" />
                  <span>100% Orisinal</span>
               </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-20 border-t border-gray-100">
          <div className="flex space-x-8 mb-12">
            {[
              { id: 'desc', label: 'Deskripsi', icon: <Info size={18} /> },
              { id: 'spec', label: 'Spesifikasi Teknik', icon: <List size={18} /> },
              { id: 'doc', label: 'Dokumen & Download', icon: <Download size={18} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-6 text-sm font-bold uppercase tracking-widest border-t-2 transition-all ${
                  activeTab === tab.id 
                  ? 'border-[#3dcd58] text-[#3dcd58]' 
                  : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="max-w-4xl animate-in fade-in slide-in-from-top-4 duration-500">
            {activeTab === 'desc' && (
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p className="mb-6">{product.description || 'Deskripsi teknis mendalam sedang diperbarui oleh tim teknis kami.'}</p>
                <h4 className="font-bold text-gray-900 mb-4">Fitur Utama:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Efisiensi energi tinggi standar global.</li>
                  <li>Daya tahan operasional di lingkungan industrial ekstrem.</li>
                  <li>Instalasi mudah dengan sistem mounting standar.</li>
                  <li>Kompatibilitas luas dengan ekosistem industrial terkemuka.</li>
                </ul>
              </div>
            )}

            {activeTab === 'spec' && (
              <div className="overflow-hidden border border-gray-100 rounded-2xl">
                <table className="min-w-full divide-y divide-gray-100">
                  <tbody className="divide-y divide-gray-100">
                    {product.specs?.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 text-sm font-bold text-gray-500 uppercase tracking-widest w-1/3">{spec.label}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{spec.value}</td>
                      </tr>
                    )) || (
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-400 italic">Spesifikasi teknis mendetail segera hadir.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'doc' && (
              <div className="grid sm:grid-cols-2 gap-4">
                {product.documents && product.documents.length > 0 ? (
                  product.documents.map((doc, i) => (
                    <a 
                      key={i}
                      href={doc.url}
                      className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#3dcd58] hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center">
                        <div className="p-3 bg-white rounded-xl text-red-500 mr-4 shadow-sm group-hover:bg-red-50 transition-colors">
                          <FileText size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{doc.title}</p>
                          <p className="text-xs text-gray-400">PDF • 2.4 MB</p>
                        </div>
                      </div>
                      <Download size={20} className="text-gray-300 group-hover:text-[#3dcd58]" />
                    </a>
                  ))
                ) : (
                  <div className="col-span-2 p-12 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <FileText size={48} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500 font-medium">No documents available for this product.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 border-t border-gray-100 pt-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-extrabold text-gray-900">Produk Terkait</h2>
              <button className="text-[#3dcd58] font-bold text-sm hover:underline flex items-center">
                Lihat Semua {product.category} <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((related) => (
                <div 
                  key={related.sku}
                  onClick={() => onProductSelect(related)}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                >
                  <div className="aspect-square bg-gray-50 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-gray-100 p-4">
                    <img 
                      src={related.image} 
                      alt={related.name} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#3dcd58] uppercase tracking-wider bg-green-50 px-2 py-0.5 rounded">
                        {related.brand}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono">SKU: {related.sku}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-[#3dcd58] transition-colors h-12">
                      {related.name}
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
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
