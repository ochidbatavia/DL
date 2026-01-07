
import React from 'react';
import { Target, Award, Users, ShieldCheck, History, TrendingUp } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80" 
            alt="Industrial Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Tentang <span className="text-[#3dcd58]">DJAJA LISTRIK</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Lebih dari 25 tahun menjadi tulang punggung penyediaan komponen elektrikal industri di seluruh penjuru Indonesia.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-green-50 text-[#3dcd58] rounded-full text-sm font-bold mb-6">
                <History className="w-4 h-4 mr-2" /> SEJARAH KAMI
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Membangun Kepercayaan Sejak 1995
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  DJAJA LISTRIK berawal dari sebuah toko perlengkapan listrik kecil di Jakarta Barat. Didorong oleh visi untuk menyediakan akses mudah bagi industri terhadap komponen berkualitas, kami tumbuh menjadi salah satu distributor dan stockist terbesar di Indonesia.
                </p>
                <p>
                  Selama puluhan tahun, kami telah melayani berbagai sektor mulai dari manufaktur otomotif, pengolahan makanan, hingga infrastruktur energi nasional. Pengalaman kami adalah jaminan bahwa kami memahami kebutuhan teknis dan urgensi bisnis Anda.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80" alt="History 1" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
                  <div className="bg-[#3dcd58] p-8 rounded-2xl text-white">
                    <div className="text-4xl font-bold mb-2">25+</div>
                    <div className="text-sm font-medium opacity-90">Tahun Pengalaman</div>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="bg-gray-100 p-8 rounded-2xl">
                    <div className="text-4xl font-bold text-gray-900 mb-2">10k+</div>
                    <div className="text-sm font-medium text-gray-500">SKU Tersedia</div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80" alt="History 2" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Target size={120} />
              </div>
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-[#3dcd58]">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Menjadi mitra strategis utama bagi industri di Indonesia dengan menyediakan solusi komponen elektrikal yang andal, orisinal, dan tersedia setiap saat untuk menjamin keberlanjutan operasional pelanggan.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <TrendingUp size={120} />
              </div>
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-[#3dcd58]">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Memimpin transformasi digital dalam distribusi logistik elektrikal di Asia Tenggara, menghadirkan efisiensi rantai pasok melalui integrasi teknologi dan layanan purna jual yang unggul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Nilai-Nilai Inti Kami</h2>
            <p className="text-lg text-gray-500">
              Prinsip yang membimbing setiap langkah kami dalam melayani pelanggan dan membangun masa depan industri Indonesia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Award className="w-8 h-8" />, 
                title: "Kualitas Tanpa Kompromi", 
                desc: "Hanya menyediakan barang 100% orisinal dari pabrikan global terkemuka." 
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                title: "Kepuasan Pelanggan", 
                desc: "Mendengarkan dan memberikan solusi teknis yang tepat sasaran." 
              },
              { 
                icon: <TrendingUp className="w-8 h-8" />, 
                title: "Kecepatan Respon", 
                desc: "Proses pesanan dan pengiriman yang cepat karena stok fisik kami miliki sendiri." 
              },
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                title: "Integritas Bisnis", 
                desc: "Membangun hubungan jangka panjang melalui transparansi dan kejujuran." 
              }
            ].map((value, i) => (
              <div key={i} className="text-center p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl text-[#3dcd58] mb-6 group-hover:bg-[#3dcd58] group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#3dcd58]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
            Siap Bekerja Sama dengan Mitra Elektrikal Terpercaya?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-[#3dcd58] rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
              Hubungi Tim Sales Kami
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              Lihat Company Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
