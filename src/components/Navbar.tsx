import React from 'react';
import { PenLine } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <PenLine className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Clivao.com</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors">Process</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <a 
            href="https://calendly.com/fahad-clivao/15min" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}