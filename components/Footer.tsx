
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: 'home' | 'about') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (page: 'home' | 'about', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div onClick={(e) => handleNavClick('home', e)} className="cursor-pointer">
              <Logo light className="mb-6" />
            </div>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Stockist terbesar untuk berbagai komponen dan peralatan elektrikal di Indonesia. Mitra terpercaya untuk solusi industri dan otomasi sejak tahun 1995.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" onClick={(e) => handleNavClick('about', e)} className="hover:text-red-600 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Produk Utama</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Lokasi Toko</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Dukungan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-600 transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Layanan Teknis</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Katalog Produk</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Kontak Sales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-600 transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Sertifikasi</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Etika Bisnis</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} DJAJA LISTRIK Indonesia. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;