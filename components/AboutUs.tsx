
import React from 'react';
import { Target, Award, Users, ShieldCheck, History, TrendingUp } from 'lucide-react';

const AboutUs: React.FC = () => {
  const whatsappUrl = "https://wa.me/628881351844?text=Halo%20Djaja%20Listrik,%20saya%20ingin%20tahu%20lebih%20lanjut%20mengenai%20perusahaan%20dan%20produk%20Anda.";

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
            Tentang <span className="text-red-600">DJAJA LISTRIK</span>
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
              <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-6">
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
                  <div className="bg-red-600 p-8 rounded-2xl text-white">
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
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-8 text-red-600">
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
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-8 text-red-600">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Memimpin transformasi digital dalam distribusi logistik elektrikal di Asia Tenggara, menghadirkan efisiensi rantai pasok melalui integrasi teknologi dan layanan teknis yang unggul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Nilai-Nilai Inti Kami</h2>
            <div className="mt-4 w-20 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integritas', desc: 'Kejujuran dalam setiap transaksi dan orisinalitas produk.', icon: <ShieldCheck /> },
              { title: 'Keahlian', desc: 'Tim teknis yang mendalam memahami spesifikasi industrial.', icon: <Award /> },
              { title: 'Kecepatan', desc: 'Logistik yang tangkas demi efisiensi operasional Anda.', icon: <TrendingUp /> },
              { title: 'Kemitraan', desc: 'Tumbuh bersama pelanggan sebagai satu kesatuan solusi.', icon: <Users /> }
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gray-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(value.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Siap Mendukung Transformasi Industri Anda</h2>
          <p className="text-xl opacity-90 mb-10">Hubungi tim konsultan kami hari ini untuk konsultasi kebutuhan komponen elektrikal proyek Anda.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Hubungi Tim Sales
            </a>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">Download Profil Perusahaan</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
