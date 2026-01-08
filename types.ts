
import React from 'react';

export interface Solution {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  icon: React.ReactNode;
  image: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  sku: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  description?: string;
  specs?: ProductSpec[];
  documents?: { title: string; url: string }[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
