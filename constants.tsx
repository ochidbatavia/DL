
import React from 'react';
import { Box, Zap, Shield, Globe, Cpu, Layout } from 'lucide-react';
import { Solution, Product } from './types';

export const TRANSLATIONS = {
  ID: {
    nav: {
      home: 'Beranda',
      products: 'Produk',
      solutions: 'Solusi',
      about: 'Tentang Kami',
      search: 'Cari Produk...',
      account: 'Akun',
      login: 'Masuk / Daftar',
      settings: 'Pengaturan',
      help: 'Hubungi Bantuan'
    },
    hero: {
      slogan: 'Your True Partner For Industrial Solution Edge',
      subSlogan: 'Stockist Terbesar Berbagai Suku Cadang & Aparatus Listrik',
      desc: 'Menyediakan ribuan SKU suku cadang dan aparatus listrik orisinal. Siap mendukung kelangsungan operasional industri Anda dengan pengiriman cepat ke seluruh Indonesia.',
      btnCatalog: 'Katalog Produk',
      btnSales: 'Hubungi Penjualan'
    },
    solutions: {
      tag: 'Solusi Kami',
      title: 'Inovasi di Setiap Level',
      desc: 'Teknologi terintegrasi yang dirancang untuk efisiensi, keandalan, dan keberlanjutan bisnis Anda.',
      learnMore: 'Pelajari lebih lanjut',
      back: 'Kembali ke Solusi',
      ctaTitle: 'Siap Mengimplementasikan Solusi Ini?',
      ctaDesc: 'Konsultasikan kebutuhan teknis proyek Anda dengan tim ahli kami sekarang.',
      ctaBtn: 'Hubungi Ahli Kami'
    },
    categories: {
      tag: 'Katalog Produk',
      title: 'Telusuri Berdasarkan Kategori',
      desc: 'Temukan ribuan komponen elektrikal berkualitas tinggi yang tersedia di stok kami, siap untuk dikirim segera.',
      btnAll: 'Lihat Semua Kategori'
    },
    products: {
      tag: 'Produk Unggulan',
      title: 'Stok Tersedia & Siap Kirim',
      desc: 'Daftar beberapa aparatus elektrikal yang paling sering dicari. Dapatkan penawaran harga terbaik untuk kebutuhan proyek Anda.',
      ready: 'Ready Stock'
    },
    footer: {
      desc: 'Stockist terbesar untuk berbagai komponen dan peralatan elektrikal di Indonesia. Mitra terpercaya untuk solusi industri dan otomasi sejak tahun 1995.',
      company: 'Perusahaan',
      support: 'Dukungan',
      legal: 'Legal',
      follow: 'Ikuti Kami',
      rights: 'Semua hak dilindungi undang-undang.'
    }
  },
  EN: {
    nav: {
      home: 'Home',
      products: 'Products',
      solutions: 'Solutions',
      about: 'About Us',
      search: 'Search Products...',
      account: 'Account',
      login: 'Login / Register',
      settings: 'Settings',
      help: 'Contact Support'
    },
    hero: {
      slogan: 'Your True Partner For Industrial Solution Edge',
      subSlogan: 'The Biggest Stockist Of Various Electrical Part & Apparatus',
      desc: 'Providing thousands of original electrical spare parts and apparatus SKUs. Ready to support your industrial operations with fast delivery across Indonesia.',
      btnCatalog: 'Product Catalog',
      btnSales: 'Contact Sales'
    },
    solutions: {
      tag: 'Our Solutions',
      title: 'Innovation at Every Level',
      desc: 'Integrated technology designed for efficiency, reliability, and the sustainability of your business.',
      learnMore: 'Learn more',
      back: 'Back to Solutions',
      ctaTitle: 'Ready to Implement This Solution?',
      ctaDesc: 'Consult your project technical requirements with our expert team today.',
      ctaBtn: 'Contact Our Experts'
    },
    categories: {
      tag: 'Product Catalog',
      title: 'Browse by Category',
      desc: 'Find thousands of high-quality electrical components available in our stock, ready for immediate shipment.',
      btnAll: 'View All Categories'
    },
    products: {
      tag: 'Featured Products',
      title: 'Stock Available & Ready to Ship',
      desc: 'List of some most sought-after electrical apparatuses. Get the best price quotes for your project needs.',
      ready: 'Ready Stock'
    },
    footer: {
      desc: 'The largest stockist for various electrical components and equipment in Indonesia. Trusted partner for industrial solutions and automation since 1995.',
      company: 'Company',
      support: 'Support',
      legal: 'Legal',
      follow: 'Follow Us',
      rights: 'All rights reserved.'
    }
  }
};

export const getSolutions = (lang: 'ID' | 'EN'): Solution[] => [
  {
    id: '1',
    title: lang === 'ID' ? 'Otomasi Industri' : 'Industrial Automation',
    description: lang === 'ID' ? 'Tingkatkan efisiensi operasional dengan stok PLC, Inverter, dan sensor dari merek terkemuka.' : 'Increase operational efficiency with stock PLCs, Inverters, and sensors from leading brands.',
    longDescription: lang === 'ID' 
      ? 'Solusi otomasi kami dirancang untuk meningkatkan produktivitas pabrik Anda. Kami menyediakan ekosistem lengkap mulai dari kontroler logika terprogram (PLC), Human Machine Interface (HMI), hingga sistem penggerak motor (Inverter/VFD) yang cerdas.'
      : 'Our automation solutions are designed to increase your plant productivity. We provide a complete ecosystem from Programmable Logic Controllers (PLC), Human Machine Interfaces (HMI), to intelligent motor drive systems (Inverter/VFD).',
    features: lang === 'ID'
      ? ['Integrasi sistem SCADA real-time', 'Optimasi lini produksi otomatis', 'Pemeliharaan prediktif berbasis IoT', 'Kompatibilitas multi-brand global']
      : ['Real-time SCADA system integration', 'Automated production line optimization', 'IoT-based predictive maintenance', 'Global multi-brand compatibility'],
    icon: <Cpu className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: lang === 'ID' ? 'Manajemen Energi' : 'Energy Management',
    description: lang === 'ID' ? 'Power meter cerdas dan sistem monitoring energi untuk penghematan biaya operasional.' : 'Smart power meters and energy monitoring systems for operational cost savings.',
    longDescription: lang === 'ID'
      ? 'Dapatkan visibilitas penuh atas penggunaan energi Anda. Solusi manajemen energi kami membantu industri mengurangi limbah daya dan mencapai target keberlanjutan melalui monitoring presisi tinggi.'
      : 'Get full visibility over your energy usage. Our energy management solutions help industries reduce power waste and achieve sustainability targets through high-precision monitoring.',
    features: lang === 'ID'
      ? ['Monitoring konsumsi daya 24/7', 'Analisis harmonisa dan kualitas daya', 'Pelaporan efisiensi otomatis', 'Kepatuhan standar audit energi']
      : ['24/7 power consumption monitoring', 'Harmonics and power quality analysis', 'Automated efficiency reporting', 'Energy audit standard compliance'],
    icon: <Zap className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: lang === 'ID' ? 'Komponen Distribusi' : 'Distribution Components',
    description: lang === 'ID' ? 'Stok MCCB, ACB, dan MCB terlengkap untuk segala kebutuhan panel tegangan rendah.' : 'Most complete stock of MCCBs, ACBs, and MCBs for all low voltage panel needs.',
    longDescription: lang === 'ID'
      ? 'Kami menyediakan tulang punggung sistem kelistrikan gedung dan industri Anda. Dengan stok pemutus sirkuit (Circuit Breakers) terbesar, kami menjamin perlindungan aset berharga Anda dari gangguan listrik.'
      : 'We provide the backbone of your building and industrial electrical systems. With the largest stock of Circuit Breakers, we guarantee the protection of your valuable assets from electrical disturbances.',
    features: lang === 'ID'
      ? ['Proteksi beban lebih & hubung singkat', 'Sistem selektivitas koordinasi proteksi', 'Konektivitas monitoring status breaker', 'Suku cadang original & bergaransi']
      : ['Overload & short circuit protection', 'Protection coordination selectivity system', 'Breaker status monitoring connectivity', 'Original & warranted spare parts'],
    icon: <Box className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  }
];

export const MOCK_PRODUCTS: Product[] = [
  { 
    sku: 'NSX100F', 
    name: 'Schneider Compact NSX100F 3P 100A', 
    brand: 'Schneider Electric', 
    category: 'MCCB', 
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80',
    description: 'Compact NSX100F circuit breaker.',
    specs: [
      { label: 'Rating (In)', value: '100 A' },
      { label: 'Breaking Capacity', value: '36 kA @ 415V' }
    ]
  },
  { 
    sku: 'FX5U-32MR/ES', 
    name: 'Mitsubishi PLC Melsec iQ-F Series', 
    brand: 'Mitsubishi', 
    category: 'PLC', 
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  { 
    sku: 'AF16-30-10-13', 
    name: 'ABB AF16-30-10-13 Contactor 100-250V AC/DC', 
    brand: 'ABB', 
    category: 'Contactor', 
    image: 'https://images.unsplash.com/photo-1558444479-c8a02e624c3d?auto=format&fit=crop&w=800&q=80',
    description: 'ABB AF16 range of contactors are mainly used for controlling 3-phase motors and power circuits.',
    specs: [
      { label: 'Coil Voltage', value: '100 - 250 V' },
      { label: 'Rated Operational Current', value: '16 A' }
    ]
  },
  { 
    sku: '6SL3210-5BE17-5UV0', 
    name: 'Siemens SINAMICS V20 Inverter 0.75kW', 
    brand: 'Siemens', 
    category: 'Inverter', 
    image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=800&q=80',
    description: 'SINAMICS V20 Basic Performance Inverter, the perfect solution for basic applications.',
    specs: [
      { label: 'Rated Power', value: '0.75 kW' },
      { label: 'Input Voltage', value: '3-Phase 380-480V' }
    ]
  },
  { 
    sku: 'E3Z-D62', 
    name: 'Omron E3Z-D62 Photoelectric Sensor', 
    brand: 'Omron', 
    category: 'Sensor', 
    image: 'https://images.unsplash.com/photo-1621905252507-b35242fdb600?auto=format&fit=crop&w=800&q=80',
    description: 'Omron E3Z-D62 compact photoelectric sensor with diffuse-reflective technology.',
    specs: [
      { label: 'Sensing Distance', value: '1 meter' },
      { label: 'Output Type', value: 'NPN' }
    ]
  },
  { 
    sku: 'EB-63-1P-16', 
    name: 'Chint EB-63 1P 16A MCB 6kA', 
    brand: 'Chint', 
    category: 'MCB', 
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: 'Chint EB-63 series miniature circuit breaker for reliable short-circuit and overload protection.',
    specs: [
      { label: 'Poles', value: '1 Phase' },
      { label: 'Rated Current', value: '16 A' }
    ]
  },
  { 
    sku: 'ATV320U15N4C', 
    name: 'Altivar Machine ATV320 1.5kW 3-Phase', 
    brand: 'Schneider Electric', 
    category: 'Inverter', 
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    description: 'Variable speed drive for simple and advanced machines.',
    specs: [
      { label: 'Output Power', value: '1.5 kW' },
      { label: 'Motor Power HP', value: '2 HP' }
    ]
  },
  { 
    sku: 'H3CR-A8', 
    name: 'Omron H3CR-A8 Analog Timer 100-240VAC', 
    brand: 'Omron', 
    category: 'Timer', 
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Solid-state multi-functional timer with a wide range of operating modes.',
    specs: [
      { label: 'Voltage', value: '100 - 240 VAC' },
      { label: 'Contact Output', value: 'Time-limit DPDT' }
    ]
  }
];
