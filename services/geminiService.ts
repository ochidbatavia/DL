import { GoogleGenAI } from "@google/genai";

/**
 * Fix: Use process.env.API_KEY directly during initialization as per @google/genai guidelines.
 * Removed the manual check for API_KEY existence as the environment is assumed to have it configured.
 */
export const getGeminiResponse = async (prompt: string, history: { role: string; content: string }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `Anda adalah asisten cerdas dari DJAJA LISTRIK (perusahaan penyedia solusi otomasi industri dan manajemen energi). 
        Tugas Anda adalah membantu pengguna memahami solusi manajemen energi, otomasi industri, dan ketersediaan stok komponen elektrikal. 
        Berikan jawaban yang profesional, informatif, dan membantu dalam Bahasa Indonesia. 
        Fokus pada efisiensi energi, digitalisasi, dan keandalan sistem industri.`,
      },
    });

    const response = await chat.sendMessage({ message: prompt });
    // Use .text property directly as it is a getter, not a method.
    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI kami.";
  }
};