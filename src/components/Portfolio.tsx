import React from 'react';
import { Zap } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "High-Converting Sales Page",
      category: "Sales Pages",
      description: "Crafted compelling copy that tells your brand story and drives conversions through proven psychological triggers.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Engaging Video Script",
      category: "Video Sales Letters",
      description: "Scripted a captivating VSL that keeps viewers hooked and guides them to take action.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Strategic Email Campaign",
      category: "Email Sequences",
      description: "Developed a nurturing email sequence that builds trust and drives consistent sales.",
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600">Results-driven copy that drives action</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}