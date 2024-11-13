import React from 'react';
import { Target, MessageSquareText, ScrollText, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Target,
      title: "Discovery",
      description: "Deep dive into your business, audience, and goals to create a targeted strategy."
    },
    {
      icon: MessageSquareText,
      title: "Research & Strategy",
      description: "Analyze market trends and competitor strategies to position your message effectively."
    },
    {
      icon: ScrollText,
      title: "Writing & Revision",
      description: "Craft compelling copy with unlimited revisions until we achieve perfection."
    },
    {
      icon: CheckCircle,
      title: "Optimization",
      description: "Test and refine the copy based on real performance data."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How We'll Work Together</h2>
          <p className="text-xl text-gray-600">A proven process that delivers results, every single time</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <step.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}