
// Fix: Added React import to resolve React.ReactNode namespace error
import React from 'react';

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Product {
  sku: string;
  name: string;
  brand: string;
  category: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
