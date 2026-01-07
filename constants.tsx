
import React from 'react';
import { Box, Zap, Shield, Globe, Cpu, Layout } from 'lucide-react';
import { Solution, Product } from './types';

export const SOLUTIONS: Solution[] = [
  {
    id: '1',
    title: 'Otomasi Industri',
    description: 'Tingkatkan efisiensi operasional dengan stok PLC, Inverter, dan sensor dari merek terkemuka.',
    icon: <Cpu className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Manajemen Energi',
    description: 'Power meter cerdas dan sistem monitoring energi untuk penghematan biaya operasional.',
    icon: <Zap className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Komponen Distribusi',
    description: 'Stok MCCB, ACB, dan MCB terlengkap untuk segala kebutuhan panel tegangan rendah.',
    icon: <Box className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Infrastruktur Gedung',
    description: 'Solusi saklar, stop kontak, dan kontrol penerangan gedung komersial dan residensial.',
    icon: <Layout className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Energi Terbarukan',
    description: 'Inverter solar dan komponen pendukung untuk sistem PLTS mandiri dan on-grid.',
    icon: <Globe className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1509391366360-fe5bb584850a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Keamanan Sistem',
    description: 'Proteksi petir dan sistem grounding berkualitas tinggi untuk melindungi aset berharga Anda.',
    icon: <Shield className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&w=800&q=80'
  }
];

export const MOCK_PRODUCTS: Product[] = [
  { 
    sku: 'NSX100F', 
    name: 'Schneider Compact NSX100F 3P 100A', 
    brand: 'Schneider Electric', 
    category: 'MCCB', 
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: 'Compact NSX100F adalah pemutus sirkuit (Circuit Breaker) 3 kutub lengkap yang dirancang untuk mengoptimalkan ruang dan kapasitas pemutusan. Ini adalah pilihan tepat untuk semua aplikasi standar dan spesifik.',
    specs: [
      { label: 'Arus Pengenal (In)', value: '100 A' },
      { label: 'Kapasitas Pemutusan (Icu)', value: '36 kA pada 415V AC' },
      { label: 'Jumlah Kutub', value: '3P' },
      { label: 'Tipe Unit Trip', value: 'Termal-Magnetik (TM-D)' }
    ],
    documents: [
      { title: 'Datasheet Teknik', url: '#' },
      { title: 'Instruksi Pemasangan', url: '#' }
    ]
  },
  { 
    sku: 'LC1D12M7', 
    name: 'Schneider TeSys D Contactor 12A 220VAC', 
    brand: 'Schneider Electric', 
    category: 'Contactor', 
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80',
    description: 'Kontaktor TeSys D untuk aplikasi motor hingga 5.5kW @ 400V. Sangat andal dengan daya tahan mekanik yang tinggi untuk penggunaan industri berat.',
    specs: [
      { label: 'Arus Operasional', value: '12 A' },
      { label: 'Tegangan Koil', value: '220 V AC' },
      { label: 'Kontak Bantu', value: '1 NO + 1 NC' },
      { label: 'Kapasitas Motor', value: '5.5 kW' }
    ]
  },
  { 
    sku: 'FX5U-32MR/ES', 
    name: 'Mitsubishi PLC Melsec iQ-F Series', 
    brand: 'Mitsubishi', 
    category: 'PLC', 
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    description: 'Generasi berikutnya dari PLC Mitsubishi Electric yang sukses. Seri iQ-F menawarkan performa tinggi, kontrol drive yang canggih, dan kemudahan penggunaan yang luar biasa.',
    specs: [
      { label: 'Input/Output', value: '32 I/O (16 Input, 16 Output)' },
      { label: 'Tipe Output', value: 'Relay' },
      { label: 'Tegangan Power', value: '100-240V AC' },
      { label: 'Komunikasi', value: 'Ethernet, RS485 Terintegrasi' }
    ]
  },
  { 
    sku: 'S8FS-G15024CD', 
    name: 'Omron Power Supply 150W 24VDC', 
    brand: 'Omron', 
    category: 'Power Supply', 
    image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=800&q=80',
    description: 'Catu daya DIN rail berperforma tinggi dengan desain yang sangat ringkas. Seri S8FS dirancang khusus untuk reliabilitas jangka panjang di lingkungan industri.',
    specs: [
      { label: 'Daya Output', value: '150 W' },
      { label: 'Tegangan Output', value: '24 V DC' },
      { label: 'Arus Output', value: '6.5 A' },
      { label: 'Efisiensi', value: '90%' }
    ]
  },
  { sku: 'GV2ME08', name: 'Motor Manual Starter 2.5-4A', brand: 'Schneider Electric', category: 'Motor Protection', image: 'https://picsum.photos/seed/gv2/100/100' },
  { sku: 'EASY9-MCB-1P-16A', name: 'Schneider Easy9 MCB 1 Pole 16A', brand: 'Schneider Electric', category: 'MCB', image: 'https://picsum.photos/seed/mcb/100/100' },
  { sku: 'PM2230', name: 'Schneider PowerLogic PM2230 Energy Meter', brand: 'Schneider Electric', category: 'Meter', image: 'https://picsum.photos/seed/meter/100/100' },
  { sku: 'ATV320U22N4B', name: 'Schneider Altivar 320 VFD 2.2kW', brand: 'Schneider Electric', category: 'Inverter', image: 'https://picsum.photos/seed/vfd/100/100' },
];
