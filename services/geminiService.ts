
import { GoogleGenAI } from "@google/genai";
import { MOCK_PRODUCTS } from "../constants";

export const getGeminiResponse = async (prompt: string, history: { role: string; content: string }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Format product list for the AI context
    const productList = MOCK_PRODUCTS.map(p => `- ${p.name} (SKU: ${p.sku}, Brand: ${p.brand}, Kategori: ${p.category})`).join('\n');

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `Anda adalah 'Djaja Expert AI', asisten teknis resmi dari DJAJA LISTRIK Indonesia. 
        DJAJA LISTRIK adalah stockist komponen elektrikal industri terbesar.
        
        TUGAS UTAMA:
        1. Membantu pelanggan menemukan komponen elektrikal yang tepat.
        2. Menjawab pertanyaan teknis seputar otomasi industri, manajemen energi, dan perlindungan sirkuit.
        3. Memberikan rekomendasi produk dari daftar stok kami.
        
        DAFTAR PRODUK TERSEDIA (Stok Utama):
        ${productList}
        
        PANDUAN KOMUNIKASI:
        - Jika pengguna menanyakan produk yang ada dalam daftar, berikan detail SKU dan kelebihannya.
        - Jika produk tidak ada dalam daftar, sampaikan bahwa tim sales kami dapat mencarikan alternatif atau memesankannya secara khusus.
        - Gunakan Bahasa Indonesia yang profesional, ramah, dan sangat teknis (expert).
        - Fokus pada solusi efisiensi dan keandalan sistem.`,
      },
    });

    const response = await chat.sendMessage({ message: prompt });
    return response.text || "Maaf, saya sedang mengalami kendala teknis. Silakan hubungi tim sales kami secara langsung.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, terjadi kesalahan saat menghubungi Djaja Expert AI. Silakan coba beberapa saat lagi.";
  }
};
