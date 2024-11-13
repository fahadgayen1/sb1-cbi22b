import React from 'react';
import { FileText, Mail, Rocket, Video, Target, PenLine } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Sales Pages",
      description: "Long-form sales pages that convert cold traffic into eager buyers using proven direct response principles."
    },
    {
      icon: Video,
      title: "Video Sales Letters (VSLs)",
      description: "Compelling scripts that keep viewers engaged and drive high-ticket sales."
    },
    {
      icon: Mail,
      title: "Email Sequences",
      description: "Strategic email campaigns that nurture leads and drive consistent sales on autopilot."
    },
    {
      icon: Rocket,
      title: "Product Launch Campaigns",
      description: "Full-suite launch copy that creates buzz and maximizes day-one sales."
    },
    {
      icon: Target,
      title: "Direct Response Ads",
      description: "Scroll-stopping ad copy that generates qualified leads and sales."
    },
    {
      icon: PenLine,
      title: "High-Ticket Sales Copy",
      description: "Premium copy packages for high-value offers, optimized for maximum conversions."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Conversion-Focused Services</h2>
          <p className="text-xl text-gray-600">Specialized in high-impact copy that drives real business growth</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}