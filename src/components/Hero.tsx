import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-600">Trained by Industry's Top 1% Copywriters</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Turn Words Into <span className="text-blue-600">Revenue Machines</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Crafting high-converting copy for ambitious brands that want to scale. Specialized in sales pages, VSLs, and launch campaigns that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://calendly.com/fahad-clivao/15min" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Strategy Call <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="#services" 
              className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-lg"
            >
              View Services <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}